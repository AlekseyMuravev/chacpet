import { RouteNode } from "@wildberries/service-router/lib/router/components";
import { PHOTOS_PAGE_ROUTE } from "@/page/constants/routes";
import { Page } from "./page";

const action = async () => {
  return {
    title: 'Messages',
    content: (
      <RouteNode nodeName={PHOTOS_PAGE_ROUTE.nodeName}>
        {() => <Page />}
      </RouteNode>
    ),
  };
};

export default action;
