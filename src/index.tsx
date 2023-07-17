
import { configureRouter } from '@wildberries/service-router';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { HOME_PAGE_ROUTE } from './page/constants/routes';
import { routes } from './page/routes';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
  );
}

const router = configureRouter({
  defaultRoute: HOME_PAGE_ROUTE.nodeName,
});

router.setDependencies({
  routes,
});

router.add(routes);

router.start(() => {
  const root = createRoot(container);

  root.render(
    <App router={router} />
  );
});