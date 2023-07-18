import { RouterProvider } from 'react-router5'
import { Router } from 'router5'
import { memo } from 'react';
import { RouteNode } from '@wildberries/service-router';
import { MainLayout } from '@/shared/main-layout';

type PropsType = {
  router: Router;
};

const App = memo(({ router }: PropsType) => {

  return (
    // <StoreProvider>
    <RouterProvider key={1} router={router}>
      <MainLayout>
        <RouteNode nodeName="">{({ content }) => content}</RouteNode>
      </MainLayout>
    </RouterProvider>
    // </StoreProvider>
  );
})

export default App;
