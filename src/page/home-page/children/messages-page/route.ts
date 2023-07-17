import { MESSAGES_PAGE_ROUTE } from "@/page/constants/routes";

export default {
  name: MESSAGES_PAGE_ROUTE.name,
  path: MESSAGES_PAGE_ROUTE.path,
  loadAction: () => import('./index'),
}