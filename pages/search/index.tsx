import { useRouter } from 'next/router'
import Head from 'next/head'
import SearchResult from '../../components/Assemble/SearchResult'
import Layout from '../../components/Assemble/Layout'
import { useEffect, useState } from 'react'
import { NewsItem, SEARCH_TYPE } from '../../constants/news'
import { getSearch } from '../../services/guardian/news.api'
import { transformItems } from '../../services/guardian/_transform'

const Index = () => {
  const router = useRouter()
  const { query } = router

  const [loading, setLoading] = useState<Boolean>(false)
  const [keyword, setKeyword] = useState<String>(query.q ? query.q.toString() : '')
  const [results, setResults] = useState<NewsItem[]>([])

  const fetchData = (keyword: String) => {
    setLoading(true)
    getSearch({
      'q': keyword,
      'page': 1,
      'page-size': 12,
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline',
    })
      .then((json) => {
        const transformedResults = transformItems(json.data.response.results)
        setResults(transformedResults)
        setLoading(false)
      })
      .catch((error) => {
        // TODO: handle with toast
        console.log('error', error)
      })
  }

  useEffect(() => {
    if(query.q) {
      setKeyword(query.q.toString())
    }
  }, [query])

  useEffect(() => {
    if(keyword) {
      fetchData(keyword)
    }
  }, [keyword])

  const handleSearchSubmit = (value: String, type: SEARCH_TYPE) => {
    setKeyword(value)
    router.query.q = value.toString()
    router.push(router)
    if(type === SEARCH_TYPE.ENTER) {
      fetchData(keyword)
    }
  }
  
  return (
    <div>
      <Head>
        <title>Search results | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        loading={loading}
        onSearchSubmit={handleSearchSubmit}
      >
        <SearchResult
          items={results}
        />
      </Layout>
    </div>
  )
}

export default Index