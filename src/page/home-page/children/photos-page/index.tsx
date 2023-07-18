import { RouteNode } from "@wildberries/service-router/lib/router/components";
import { PAGE_ROUTES } from "@/page/constants/routes";
import { Page } from "./page";

const action = async () => {
  return {
    title: 'Messages',
    content: (
      <RouteNode nodeName={PAGE_ROUTES.photos.nodeName}>
        {() => <Page />}
      </RouteNode>
    ),
  };
};

export default action;
