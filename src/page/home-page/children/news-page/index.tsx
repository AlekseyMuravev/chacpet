import { RouteNode } from "@wildberries/service-router/lib/router/components";
import { PAGE_ROUTES } from "@/page/constants/routes";
import { Page } from "./page";

const action = async () => {
  return {
    title: 'News',
    content: (
      <RouteNode nodeName={PAGE_ROUTES.news.nodeName}>
        {() => <Page />}
      </RouteNode>
    ),
  };
};

export default action;
