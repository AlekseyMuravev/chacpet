import { RouteNode } from "@wildberries/service-router/lib/router/components";
import { MESSAGES_PAGE_ROUTE } from "@/page/constants/routes";
import { Page } from "./page";

const action = async () => {
  return {
    title: 'Messages',
    content: (
      <RouteNode nodeName={MESSAGES_PAGE_ROUTE.nodeName}>
        {() => <Page />}
      </RouteNode>
    ),
  };
};

export default action;
