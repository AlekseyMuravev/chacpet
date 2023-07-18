import { SyntheticEvent, useCallback, useMemo, memo } from "react";
import { Tab, Tabs } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhotoIcon from '@mui/icons-material/Photo';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useRoute } from "react-router5";
import { PAGE_ROUTES } from "@/pages/constants/routes";

export const PageTabs = memo(() => {
  const router = useRoute();

  const handleChange = useCallback((event: SyntheticEvent, value: any) => router.router.navigate(value)
    , [router]);

  const messageIcon = useMemo(() => <ChatBubbleOutlineIcon />, [])
  const photoIcon = useMemo(() => <PhotoIcon />, [])
  const newspaperIcon = useMemo(() => <NewspaperIcon />, [])

  return (
    <Tabs
      orientation="vertical"
      value={router.route.name}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab
        sx={{ justifyContent: "flex-start" }}
        icon={newspaperIcon}
        iconPosition="start"
        value={PAGE_ROUTES.main.nodeName}
        label="Главная" />
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
  );
});
