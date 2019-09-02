export class WindowUtil {}

export function scrollTo(element) {
  if (element) {
    /*
    window.scrollTo({
      top: 0,
      left: element.offsetTop,
      behavior: 'smooth',
    });
    */
    element.scrollIntoView({});
  }
}

export function getCurrentWindowPosition() {
  return window.pageYOffset;
}

export function checkRelativePosition(currentY, ref) {
  if (!ref || !ref.current) {
    return false;
  }

  if (currentY > ref.current.getBoundingClientRect().top) {
    return true;
  }
  return false;
}
