import { PHOTOS_PAGE_ROUTE } from "@/page/constants/routes";

export default {
  name: PHOTOS_PAGE_ROUTE.name,
  path: PHOTOS_PAGE_ROUTE.path,
  loadAction: () => import('./index'),
}