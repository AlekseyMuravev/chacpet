import { HOME_PAGE_ROUTE, NEWS_PAGE_ROUTE } from '../constants/routes';
import news from './children/news-page/route';
import messages from './children/messages-page/route';
import photos from './children/photos-page/route';

export default {
  name: HOME_PAGE_ROUTE.name,
  path: HOME_PAGE_ROUTE.path,
  loadAction: () => import('./index'),
  forwardTo: NEWS_PAGE_ROUTE.nodeName,
  children: [
    news,
    messages,
    photos
  ]
}