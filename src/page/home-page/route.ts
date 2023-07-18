import { PAGE_ROUTES } from '../constants/routes';
import news from './children/news-page/route';
import messages from './children/messages-page/route';
import photos from './children/photos-page/route';

export default {
  name: PAGE_ROUTES.home.name,
  path: PAGE_ROUTES.home.path,
  loadAction: () => import('./index'),
  forwardTo: PAGE_ROUTES.news.nodeName,
  children: [
    news,
    messages,
    photos
  ]
}