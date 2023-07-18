import { RouteNode } from "@wildberries/service-router";
import { PAGE_ROUTES } from "../constants/routes";
import Layout from "../layout";



const action = async () => {
  return {
    content: (
      <Layout>
        <RouteNode nodeName={PAGE_ROUTES.home.nodeName}>
          {({ content }) => content}
        </RouteNode>
      </Layout>
    ),
  };
};

export default action;
