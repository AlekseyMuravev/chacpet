type RouteType = {
  name: string;
  path: string;
  nodeName: string;
}

enum RouteNamesEnum {
  HOME = 'main',
  NEWS = 'news',
  MESSAGES = 'messages',
  PHOTOS = 'photos',
}

export const PAGE_ROUTES: Record<RouteNamesEnum, RouteType> = {
  [RouteNamesEnum.HOME]: {
    name: 'main',
    path: '/main',
    nodeName: 'main'
  },
  [RouteNamesEnum.NEWS]: {
    name: 'news',
    path: '/news',
    nodeName: 'news'
  },
  [RouteNamesEnum.MESSAGES]: {
    name: 'messages',
    path: '/messages',
    nodeName: 'messages'
  },
  [RouteNamesEnum.PHOTOS]: {
    name: 'photos',
    path: '/photos',
    nodeName: 'photos'
  }
}