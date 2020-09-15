import axios from 'axios';
import { assign, pickBy, flowRight, includes, merge } from 'lodash';

var TEMPLATE_REGEXP = /\${[_\w]+}/g,
  GROUP_EXTRACTOR = /\${([_\w]+)}/;

var template = function template(phrase, dict = {}) {
  let match;
  let result = '';
  while ((match = phrase.match(/\${.*?}/))) {
    const val = match[0].slice(2, -1);
    if (!(val in dict)) {
      throw new Error(`template: Missing parameter ${val}`);
    }
    result += phrase.slice(0, match.index);
    result += dict[val];
    phrase = phrase.slice(match.index + match[0].length);
  }
  return result + phrase;
};

// browser util
var serializeQueryParameters = function serializeQueryParameters(obj) {
  var str = [];

  for (var p in obj) {
    if (Object.prototype.toString.call(obj[p]) === '[object Array]') {
      for (var i = 0; i < obj[p].length; i++) {
        if (obj[p] && typeof obj[p][i] !== 'function') {
          str.push(p + '[]=' + encodeURIComponent(obj[p][i]));
        }
      }
    } else if (typeof obj[p] === 'object') {
      for (var k in obj[p]) {
        if (obj[p]) {
          str.push(
            p +
              '[' +
              encodeURIComponent(k) +
              ']=' +
              encodeURIComponent(obj[p][k])
          );
        }
      }
    } else if (obj[p] === 0 || obj[p] === false) {
      str.push(p + '=' + encodeURIComponent(obj[p]));
    } else if (obj[p]) {
      str.push(p + '=' + encodeURIComponent(obj[p]));
    }
  }

  return str.join('&');
};

var mergeDefaultKeyIntoKey = function(def, key) {
  return function(requestData) {
    requestData[key] = requestData[key] || {};
    if (requestData[def]) {
      requestData[key] = {
        ...requestData[def],
        ...requestData[key]
      };
      // delete requestData[def];
    }
    return requestData;
  };
};

var nestKeyAsKeyInKey = function(toNest, nestingAs, nestingUnder) {
  return function(requestData) {
    if (requestData[toNest] && requestData[nestingUnder]) {
      requestData[nestingUnder][nestingAs] = requestData[toNest];
      // delete requestData[toNest];
    }
    return requestData;
  };
};

var excludeTemplateParameters = function(templateVariables, requestData) {
  requestData.params = pickBy(requestData.param, (v, k) => {
    return !includes(templateVariables, k);
  });
  return requestData;
};

// {
//   clientId,
//   baseUrl,
//   accessToken,
//   globalParams,
//   globalData,
//   globalHeaders,

//   preRequestTransform,
//   postRequestTransform
// }

export default function endpointCreator(globalOptions) {
  return function(endpoint, specification) {
    console.log('Specification', specification);
    var matches = endpoint.match(TEMPLATE_REGEXP) || [],
      templateVariables = matches.map(m => {
        return m.match(GROUP_EXTRACTOR);
      });

    var requestId = 0;

    var makeRequest = function(requestData) {
      const clonedParams = { ...requestData.params };
      let url = `${requestData.baseUrl}${template(endpoint, clonedParams)}`;

      if (requestData.paramsString) {
        url += `?${requestData.paramString}`;
      }

      const extendBase = {
        method: requestData.method,
        url
      };

      if (requestData.postRequestTransform) {
        extendBase.transformResponse = requestData.postRequestTransform;
      }

      var requestConfig = {
        ...extendBase,
        ...excludeTemplateParameters(templateVariables, requestData)
      };

      if (globalOptions.accessToken) {
        assign(requestConfig.headers, {
          Authorization: `Bearer ${globalOptions.accessToken}`
        });
      }

      var thisRequestId = ++requestId;

      if (
        requestConfig.headers &&
        requestConfig.headers['Content-Type'] ===
          'application/x-www-form-urlencoded'
      ) {
        requestConfig.data = serializeQueryParameters(requestConfig.data);
      }

      if (requestConfig.formData) {
        requestConfig.data = requestConfig.formData;
      }
      console.log('Req url:', url);
      console.log('Req config:', requestConfig);
      return axios(requestConfig).then(response => {
        if (specification.preserveOnlyLatest && thisRequestId !== requestId) {
          throw new Error('This was not the latest request.');
        } else {
          return response;
        }
      });
    };

    return flowRight(
      makeRequest,
      nestKeyAsKeyInKey('clientId', 'client_id', 'params'),
      mergeDefaultKeyIntoKey('defaultHeaders', 'headers'),
      mergeDefaultKeyIntoKey('defaultData', 'data'),
      mergeDefaultKeyIntoKey('defaultParams', 'params'),
      data => merge({}, globalOptions, specification, data),
      globalOptions.preRequestTransform
    );
  };
}

export function client(options) {
  const defaults = {
    clientId: '',
    baseUrl: 'https://localhost:8000',
    accessToken: '',
    defaultParams: {},
    defaultData: {},
    defaultHeaders: {},

    preRequestTransform: v => v,
    postRequestTransform: undefined
  };

  options = {
    ...defaults,
    ...options
  };

  const dataEndpointOptions = {
    ...options,
    baseUrl: 'https://localhost:8000',
    defaultHeaders: {
      Accept: 'application/vnd.api+json',
      'Content-type': 'application/vnd.api+json'
    }
  };

  const endpointSpecification = endpointCreator(options);

  const dataEndpointSpecification = endpointCreator(dataEndpointOptions);

  return {
    buildGetSpecification(url, options = {}) {
      return endpointSpecification(url, {
        method: 'GET',
        ...options
      });
    },
    status: endpointSpecification('/status', {
      method: 'GET',
      ...options
    })
  };
}

export function c(options) {
  const defaults = {
    clientId: '',
    baseUrl: 'https://localhost:8000',
    accessToken: '',
    params: {},
    data: {},
    headers: {}
  };

  options = {
    ...defaults,
    ...options
  };

  const dataEndpointOptions = {
    ...options,
    baseUrl: 'https://localhost:8000',
    defaultHeaders: {
      Accept: 'application/vnd.api+json',
      'Content-type': 'application/vnd.api+json'
    }
  };
}
