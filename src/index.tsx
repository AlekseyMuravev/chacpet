
import { configureRouter } from '@wildberries/service-router';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { PAGE_ROUTES } from './pages/constants/routes';
import { routes } from './shared/constants/routes';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
  );
}

const router = configureRouter({
  defaultRoute: PAGE_ROUTES.main.nodeName,
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