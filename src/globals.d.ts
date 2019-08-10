declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare namespace JSX {
  interface IntrinsicElements {
    [tagName: string]: any;
  }
}
