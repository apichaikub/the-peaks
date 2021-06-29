import { useRouter } from 'next/router'
import Head from 'next/head'
import SearchResult from '../../components/Assemble/SearchResult'
import Layout from '../../components/Assemble/Layout'
import { useEffect, useState } from 'react'
import { FILTER, NewsItem, SEARCH_TYPE } from '../../constants/news'
import { getSearch } from '../../services/guardian/news.api'
import { transformItems } from '../../services/guardian/_transform'
import NotFoundData from '../../components/Base/NotFoundData'
import { getFilterValue } from '../../helpers/filter'

const Index = () => {
  const router = useRouter()
  const { query } = router

  const [loading, setLoading] = useState<Boolean>(false)
  const [keyword, setKeyword] = useState<String>(query.q ? query.q.toString() : '')
  const [orderBy, setOrderBy] = useState<FILTER>(getFilterValue(query.orderBy ? query.orderBy.toString() : ''))
  const [results, setResults] = useState<NewsItem[]>([])

  const fetchData = (keyword: String, orderBy: FILTER) => {
    setLoading(true)
    getSearch({
      'q': keyword,
      'page': 1,
      'page-size': 12,
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline',
      'order-by': orderBy || null,
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
    setKeyword('xxx')
  }, [])
  
  useEffect(() => {
    if(query.q) {
      setKeyword(query.q.toString())
    }
    if(query.orderBy) {
      setOrderBy(getFilterValue(query.orderBy.toString()))
    }
  }, [query])

  useEffect(() => {
    if(keyword) {
      fetchData(keyword, orderBy)
    }
  }, [keyword, orderBy])

  const handleSearchSubmit = (value: String, type: SEARCH_TYPE) => {
    setKeyword(value)
    router.query.q = value.toString()
    router.push(router)
    if(type === SEARCH_TYPE.ENTER) {
      fetchData(keyword, orderBy)
    }
  }

  const handleChangeOrderBy = (value: FILTER) => {
    setOrderBy(value)
    router.query.orderBy = value.toString()
    router.push(router)
  }
  
  return (
    <>
      <Head>
        <title>Search results | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        loading={loading}
        onSearchSubmit={handleSearchSubmit}
      >
        { results.length ?
        <SearchResult
          items={results}
          filter={{ orderBy }}
          onChangeOrderBy={handleChangeOrderBy}
        /> :
        <NotFoundData>
          Not found data 😵
        </NotFoundData>
        }
      </Layout>
    </>
  )
}

export default Index