import { RouteNode } from "@wildberries/service-router";
import { PAGE_ROUTES } from "../constants/routes";
import { Page } from "./ui";

const action = async () => {
  return {
    content: (
      <RouteNode nodeName={PAGE_ROUTES.main.nodeName}>
        {() => <Page />}
      </RouteNode>
    ),
  };
};

export default action;
