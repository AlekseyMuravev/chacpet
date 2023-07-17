import { NEWS_PAGE_ROUTE } from '@/page/constants/routes';

export default {
  name: NEWS_PAGE_ROUTE.name,
  path: NEWS_PAGE_ROUTE.path,
  loadAction: () => import('./index'),
}