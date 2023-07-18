import { Tab, Tabs } from "@mui/material";
import { ReactNode, SyntheticEvent, useCallback, useMemo } from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhotoIcon from '@mui/icons-material/Photo';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useRoute } from "react-router5";
import { PAGE_ROUTES } from "../constants/routes";
import styles from './index.module.scss';

type PropsType = {
  children: ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const router = useRoute();

  const handleChange = useCallback((event: SyntheticEvent, value: any) => router.router.navigate(value)
    , [router]);

  const messageIcon = useMemo(() => <ChatBubbleOutlineIcon />, [])
  const photoIcon = useMemo(() => <PhotoIcon />, [])
  const newspaperIcon = useMemo(() => <NewspaperIcon />, [])

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.content}>
          <h1>
            ВК
          </h1>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <Tabs
            orientation="vertical"
            value={router.route.name}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab
              sx={{ justifyContent: "flex-start" }}
              icon={messageIcon}
              iconPosition="start"
              value={PAGE_ROUTES.messages.nodeName}
              label="Сообщения" />
            <Tab
              sx={{ justifyContent: "flex-start" }}
              icon={photoIcon}
              iconPosition="start"
              value={PAGE_ROUTES.photos.nodeName}
              label="Фотографии" />
            <Tab
              sx={{ justifyContent: "flex-start" }}
              icon={newspaperIcon}
              iconPosition="start"
              value={PAGE_ROUTES.news.nodeName}
              label="Новости" />
          </Tabs>
        </div>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;