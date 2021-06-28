export type NewsItem = {
  id: String;
  cover: String;
  title: String;
  summary: String;
}

export type NewsContent = {
  title: String;
  summary: String;
  createdAt: String;
  detail: String;
  image: {
    src: String;
  }
}

export enum SEARCH_TYPE {
  AUTO,
  ENTER,
}