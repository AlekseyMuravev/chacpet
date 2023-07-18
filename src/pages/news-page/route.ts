import { PAGE_ROUTES } from '../constants/routes';

export default {
  name: PAGE_ROUTES.news.name,
  path: PAGE_ROUTES.news.path,
  loadAction: () => import('./index'),
}