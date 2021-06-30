import { useEffect, useState } from 'react'
import Head from 'next/head'
import TopStory from '../components/Assemble/TopStory'
import News from '../components/Assemble/News'
import Layout from '../components/Assemble/Layout'
import { getSearch } from '../services/guardian/news.api'
import { FILTER, NewsItem } from '../constants/news'
import { transformItems } from '../services/guardian/_transform'
import useSearch from '../hooks/useSearch'

export default function Index() {
  const [loading, setLoading] = useState<Boolean>(false)
  const [orderBy, setOrderBy] = useState<FILTER>(FILTER.NEWEST)
  const [topStories, setTopStories] = useState<NewsItem[]>([])
  const [sportItems, setSportItems] = useState<NewsItem[]>([])
  const { handleSearchSubmit } = useSearch()

  const fetchTopStories = () => {
    return getSearch({
      'page': 1,
      'page-size': 8,
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline',
      // 'order-by': orderBy,
    })
  }

  const fetchSportNews = () => {
    return getSearch({
      'page': 1,
      'page-size': 3,
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline',
      'section': 'sport',
    })
  }

  const setTopStoriesState = (results: any) => {
    const transformTopStories = transformItems(results)
    setTopStories(transformTopStories)
  }

  const setSportNewsState = (results: any) => {
    const transformSportNews = transformItems(results)
    setSportItems(transformSportNews)
  }

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetchTopStories(),
      fetchSportNews(),
    ])
      .then(([result1, result2]) => {
        setTopStoriesState(result1.data.response.results)
        setSportNewsState(result2.data.response.results)
        setLoading(false)
      })
      .catch((error) => {
        // TODO: handle with toast
        setLoading(false)
      })
  }, [])

  const handleChangeOrderBy = (value: FILTER) => {
    setLoading(true)
    setOrderBy(value)
    getSearch({
      'page': 1,
      'page-size': 8,
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline',
      'order-by': value,
    })
      .then((json) => {
        setTopStoriesState(json.data.response.results)
        setLoading(false)
      })
      .catch((error) => {
        // TODO: handle with toast
      })
  }

  return (
    <div>
      <Head>
        <title>Home | The Peaks</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout
        loading={loading}
        onSearchSubmit={handleSearchSubmit}
      >
        <TopStory
          title="Top stories"
          topStories={topStories}
          filter={{ orderBy }}
          onChangeOrderBy={handleChangeOrderBy}
        />
        <News
          title="Sports"
          items={sportItems}
        />
      </Layout>
    </div>
  )
}
