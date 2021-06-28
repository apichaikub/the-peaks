import { NewsItem } from '../../constants/news'

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