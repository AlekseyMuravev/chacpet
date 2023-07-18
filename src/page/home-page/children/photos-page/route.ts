import { PAGE_ROUTES } from "@/page/constants/routes";

export default {
  name: PAGE_ROUTES.photos.name,
  path: PAGE_ROUTES.photos.path,
  loadAction: () => import('./index'),
}