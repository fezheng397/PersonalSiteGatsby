export class WindowUtil {}

export function scrollTo(ref) {
  if (ref.current) {
    window.scrollBy({
      top: 0,
      left: ref.current.offsetTop,
      behavior: 'smooth',
    });
    // ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}

export function getCurrentWindowPosition() {
  return window.pageYOffset;
}

export function checkRelativePosition(currentY, ref) {
  // console.log(ref.current.getBoundingClientRect());
  console.log('Ref is: ', ref);
  if (!ref || !ref.current) {
    return false;
  }

  if (currentY > ref.current.getBoundingClientRect().top) {
    console.log('Component Y: ', ref.current.getBoundingClientRect().top);
    return true;
  }
  return false;
}
