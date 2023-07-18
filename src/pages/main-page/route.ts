import { PAGE_ROUTES } from '../constants/routes';

export default {
  name: PAGE_ROUTES.main.name,
  path: PAGE_ROUTES.main.path,
  loadAction: () => import('./index'),
}