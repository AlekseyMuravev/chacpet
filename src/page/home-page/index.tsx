import { RouteNode } from "@wildberries/service-router";
import { HOME_PAGE_ROUTE } from "../constants/routes";

const action = async () => {
  return {
    content: (
      <RouteNode nodeName={HOME_PAGE_ROUTE.nodeName}>
        {({ content }) => content}
      </RouteNode>
    ),
  };
};

export default action;
