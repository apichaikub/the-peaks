import Head from 'next/head'
import Layout from '../../components/Assemble/Layout'
import Content from '../../components/Assemble/Content'
import useSearch from '../../hook/useSearch'
import { NewsContent } from '../../constants/news'
import { getDetail } from '../../services/guardian/news.api'
import { transformContent } from '../../services/guardian/_transform'
import { getId } from '../../helpers/utils'
import useBookmark from '../../hook/useBookmark'
import { useEffect, useState } from 'react'

type Props = {
  content: NewsContent
}

const Index = ({ content } : Props) => {
  const { handleSearchSubmit } = useSearch()
  const { isSaved, save, remove } = useBookmark()
  const [isBooked, setIsBooked] = useState<Boolean>(isSaved(content.id))

  const handleClickButtonBookmark = () => {
    if(!isBooked) {
      save(content.id)
      setIsBooked(true)
      setTimeout(() => {
        alert('SAVED TO BOOKMARKS ⭐')
      }, 100)
    } else {
      remove(content.id)
      setIsBooked(false)
      setTimeout(() => {
        alert('REMOVED FROM BOOKMARKS')
      }, 100)
    }
  }

  return (
    <div>
      <Head>
        <title>{ content.title }</title>
        <meta name="description" content={ content.summary ? content.summary.toString() : '' } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        loading={false}
        onSearchSubmit={handleSearchSubmit}
      >
        <Content
          isSaved={isBooked}
          createdAt={content.createdAt}
          topic={content.title}
          summary={content.summary}
          detail={content.detail}
          image={{ 
            src: content.image.src,
            caption: '',
          }}
          onClickButtonBookmark={handleClickButtonBookmark}
        />
      </Layout>
    </div>
  )
}

Index.getInitialProps = async ({ query } : any) => {
  const all : String[] = query.all ? Array.from(query.all) : []
  const id = getId(all)
  
  let content = {}
  try {
    const json = await getDetail(id, {
      'show-elements': 'all',
      'show-fields': 'thumbnail,trailText,headline,body',
    })
    content = json.data.response.content
  } catch (error) {
    // TODO: handle error
  }

  return {
    content: transformContent(content),
  }
}

export default Index
