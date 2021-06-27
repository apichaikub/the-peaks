import { useEffect, useState } from 'react'
import Head from 'next/head'
import TopStory from '../components/Assemble/TopStory'
import News from '../components/Assemble/News'
import Layout from '../components/Assemble/Layout'
import { getSearch } from '../services/guardian/news.api'
import { NewsItem } from '../constants/news'

const transformItems = (items : any[]) : NewsItem[] => {
  return items.map((item: any) => {
    return {
      id: item.id,
      cover: item.fields.thumbnail,
      title: item.fields.headline,
      summary: item.fields.trailText,
    }
  })
}

export default function Index() {
  const [loading, setLoading] = useState<Boolean>(false)
  const [topStories, setTopStories] = useState<NewsItem[]>([])
  const [sportItems, setSportItems] = useState<NewsItem[]>([])

  useEffect(() => {
    setLoading(true)
    Promise.all([
      getSearch({
        'page': 1,
        'page-size': 8,
        'show-elements': 'all',
        'show-fields': 'thumbnail,trailText,headline',
      }),
      getSearch({
        'page': 1,
        'page-size': 3,
        'show-elements': 'all',
        'show-fields': 'thumbnail,trailText,headline',
        'section': 'sport',
      })
    ])
      .then(([result1, result2]) => {
        const transformTopStories = transformItems(result1.data.response.results)
        const transformSportNews = transformItems(result2.data.response.results)
        setTopStories(transformTopStories)
        setSportItems(transformSportNews)
        setLoading(false)
      })
      .catch((error) => {
        // TODO: handle with toast
        console.log('error', error)
      })  
  }, [])

  return (
    <div>
      <Head>
        <title>Home | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout loading={loading}>
        <TopStory
          title="Top stories"
          topStories={topStories}
        />
        <News
          title="Sports"
          items={sportItems}
        />
      </Layout>
    </div>
  )
}
