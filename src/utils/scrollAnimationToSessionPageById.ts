import { scroller } from 'react-scroll';

export function scrollAnimationToSessionPageById(idSessionPage: string): void {
  scroller.scrollTo(idSessionPage, {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutQuint',
  });

  return;
}
