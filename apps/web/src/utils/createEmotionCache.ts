import createCache from '@emotion/cache';

const isBrowser = typeof document !== "undefined";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that emotion styles are loaded first in case if you want to use css library as MUI.
// It allows developers to easily override emotion styles with other styling solutions, like CSS modules.
const createEmotionCache = () => {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "emotion-style", insertionPoint });
}

export default createEmotionCache;
