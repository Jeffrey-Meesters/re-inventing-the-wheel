import homeHtml from '../pages/home.html?raw'
import aboutHtml from '../pages/about.html?raw'
import contactHtml from '../pages/contact.html?raw'

export const routes: Record<string, string> = {
  '/': homeHtml,
  '/about': aboutHtml,
  '/contact': contactHtml,
};