import ReactGA from 'react-ga';

export function internalLinkEvent(label) {
  ReactGA.event({
    category: 'Internal Link',
    action: 'click',
    label,
  });
}
