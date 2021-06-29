import { NewsContent, NewsItem } from '../../constants/news'

export const transformItems = (items : any[]) : NewsItem[] => {
  return items.map((item: any) => {
    return {
      id: item.id,
      cover: item.fields.thumbnail || '/images/not-found-image.png',
      title: item.fields.headline,
      summary: item.fields.trailText,
    }
  })
}

export const transformContent = (result: any) : NewsContent => {
  return {
    id: result?.id,
    title: result?.fields?.headline,
    summary: result?.fields?.trailText,
    createdAt: result?.webPublicationDate,
    detail: result?.fields?.body,
    image: {
      src: result?.fields?.thumbnail || '/images/not-found-image.png',
    }
  }
}