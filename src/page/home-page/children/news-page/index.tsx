import { RouteNode } from "@wildberries/service-router/lib/router/components";
import { NEWS_PAGE_ROUTE } from "@/page/constants/routes";
import { Page } from "./page";

const action = async () => {
  return {
    title: 'News',
    content: (
      <RouteNode nodeName={NEWS_PAGE_ROUTE.nodeName}>
        {() => <Page />}
      </RouteNode>
    ),
  };
};

export default action;
