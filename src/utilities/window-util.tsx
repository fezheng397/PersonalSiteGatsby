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
