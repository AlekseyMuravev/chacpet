import { RouterProvider } from 'react-router5'
import { Router } from 'router5'
import { memo } from 'react';
import { RouteNode } from '@wildberries/service-router';

type PropsType = {
  router: Router;
};

const App = memo(({ router }: PropsType) => {

  return (
    // <StoreProvider>
    <RouterProvider key={1} router={router}>
      <RouteNode nodeName="">{({ content }) => content}</RouteNode>
    </RouterProvider>
    // </StoreProvider>
  );
})

export default App;
