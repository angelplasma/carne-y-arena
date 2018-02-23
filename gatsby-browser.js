import { SUPPORTS_WEBP } from './lib/webp'

exports.onClientEntry = (obj) => {
  document.documentElement.dataset.webp = SUPPORTS_WEBP
}
