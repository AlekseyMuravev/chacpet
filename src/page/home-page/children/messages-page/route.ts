import { PAGE_ROUTES } from "@/page/constants/routes";

export default {
  name: PAGE_ROUTES.messages.name,
  path: PAGE_ROUTES.messages.path,
  loadAction: () => import('./index'),
}