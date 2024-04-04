import { IS_BROWSER } from './environment';

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

/**
 * Disables "Back" button for current page
 * Usage: Call function in useEffect(  ,[]) or directly
 */
export function disableBackNavigation() {
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };
}

/**
 * Navigates to the specified URL with options
 */
export function navigateTo(url: string, replaceInsteadOfPush = false, optionalTitle = '') {
  if (replaceInsteadOfPush) {
    window.history.replaceState(null, optionalTitle, url);
  } else {
    window.history.pushState(null, optionalTitle, url);
  }
}

/**
 * For smooth scrolling to the specified element with optional offset
 * @param {object} destinationElement - DOM element to scroll to
 * @param {number} [verticalOffset] - optional vertical offset
 * @param {object} [scrollingElement] - optional scrolling element, defaults to .window
 * @param {string} [behavior] - optional scroll behavior, defaults to 'smooth'
 */
export function scrollIntoViewAdjusted(
  destinationElement: Element | HTMLElement | null,
  verticalOffset = 0,
  scrollingElement?: Element | HTMLElement | null,
  behavior: 'auto' | 'instant' | 'smooth' | undefined = 'smooth'
) {
  if (!IS_BROWSER || !destinationElement) {
    return;
  }

  const rect = destinationElement.getBoundingClientRect();
  if (!rect || typeof rect.top === 'undefined') {
    return;
  }

  const top = rect.top - verticalOffset;
  const elementToScroll = scrollingElement ?? window;
  elementToScroll.scrollBy({ top, behavior });
}
