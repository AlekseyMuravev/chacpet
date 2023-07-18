type RouteType = {
  name: string;
  path: string;
  nodeName: string;
}

enum RouteNamesEnum {
  HOME = 'home',
  NEWS = 'news',
  MESSAGES = 'messages',
  PHOTOS = 'photos',
}

export const PAGE_ROUTES: Record<RouteNamesEnum, RouteType> = {
  [RouteNamesEnum.HOME]: {
    name: 'home',
    path: '/home',
    nodeName: 'home'
  },
  [RouteNamesEnum.NEWS]: {
    name: 'news',
    path: '/news',
    nodeName: 'home.news'
  },
  [RouteNamesEnum.MESSAGES]: {
    name: 'messages',
    path: '/messages',
    nodeName: 'home.messages'
  },
  [RouteNamesEnum.PHOTOS]: {
    name: 'photos',
    path: '/photos',
    nodeName: 'home.photos'
  }
}