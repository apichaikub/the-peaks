import Head from 'next/head'
import Layout from '../../components/Assemble/Layout'
import Bookmark from '../../components/Assemble/Bookmark'
import useBookmark from '../../hook/useBookmark'
import NotFoundData from '../../components/Base/NotFoundData'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FILTER, NewsItem } from '../../constants/news'
import { getDetail } from '../../services/guardian/news.api'
import { transformItems } from '../../services/guardian/_transform'
import { getFilterValue } from '../../helpers/filter'
import { AxiosResponse } from 'axios'
import useSearch from '../../hook/useSearch'

const Index = () => {
  const { bookmarks, bookmarkIds } = useBookmark()
  const { handleSearchSubmit } = useSearch()
  const [loading, setLoading] = useState<Boolean>(false)
  const [results, setResults] = useState<NewsItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchNews = bookmarkIds.map((id: String) : Promise<AxiosResponse<any>> => {
    return getDetail(id, {
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline,body',
    })
  })

  useEffect(() => {
    if(!isLoaded && !loading) {
      setLoading(true)
      Promise.all(fetchNews)
        .then((arr: any) => {
          const responses = arr.map((json: any) => json.data.response.content)
          const transformedResults = responses
            .filter((content: any) => !!content)
            .map((content: any) => transformItems([content])[0])
          setResults(transformedResults)
          setLoading(false)
          setIsLoaded(true)
        })
        .catch((error) => {
          // TODO: handle with toast
          console.log('error', error)
        })
    }
  }, [fetchNews, isLoaded, loading])

  return (
    <div>
      <Head>
        <title>Bookmark ({ bookmarks.length }) | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        loading={loading}
        onSearchSubmit={handleSearchSubmit}
      >
        { results.length ?
        <Bookmark
          items={results}
        /> :
        <NotFoundData>
          Not found data 😵
        </NotFoundData>
        }
      </Layout>
    </div>
  )
}

export default Index 
