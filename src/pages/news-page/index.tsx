import { RouteNode } from "@wildberries/service-router/lib/router/components";
import { PAGE_ROUTES } from "../constants/routes";
import { Page } from "./ui";

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
