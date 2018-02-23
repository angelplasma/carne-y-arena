// lifted from https://github.com/DonRai/react-image-webp/blob/master/modules/index.js
const supportsWebP = () => {
  const elem = typeof document === 'object' ? document.createElement('canvas') : {};

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } else {
    return false;
  }
}

export const SUPPORTS_WEBP = supportsWebP()
