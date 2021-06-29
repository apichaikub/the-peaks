import Head from 'next/head'
import Layout from '../../components/Assemble/Layout'
import Content from '../../components/Assemble/Content'
import useSearch from '../../hook/useSearch'
import { NewsContent } from '../../constants/news'
import { getDetail } from '../../services/guardian/news.api'
import { transformContent } from '../../services/guardian/_transform'
import { getId } from '../../helpers/utils'
import useBookmark from '../../hook/useBookmark'
import { useState } from 'react'
import Toast from '../../components/Base/Toast'
import useToastBookmark from '../../hook/useToastBookmark'

type Props = {
  content: NewsContent
}

const Index = ({ content } : Props) => {
  const { handleSearchSubmit } = useSearch()
  const { isSaved, save, remove } = useBookmark()
  const { isShowBookedToast, isShowRemovedToast, showBookedToast, showRemovedToast } = useToastBookmark()
  const [isBooked, setIsBooked] = useState<Boolean>(isSaved(content.id))

  const handleClickButtonBookmark = () => {
    if(!isBooked) {
      save(content.id)
      setIsBooked(true)
      showBookedToast({ delay: 3000 })
    } else {
      remove(content.id)
      setIsBooked(false)
      showRemovedToast({ delay: 3000 })
    }
  }

  return (
    <div>
      <Head>
        <title>{ content.title }</title>
        <meta name="description" content={ content.summary ? content.summary.toString() : '' } />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout
        loading={false}
        onSearchSubmit={handleSearchSubmit}
      >
        { isShowBookedToast && <Toast
          bgColor="#388E3C"
          text="saved to bookmarks"
          iconSrc="/images/bookmarkon-icon@2x.svg"
          iconWidth={10}
          iconHeight={13}
        /> }
        { isShowRemovedToast && <Toast
          bgColor="#D32F2F"
          text="removed from bookmarks"
          iconSrc="/images/bookmarkoff-icon@2x.svg"
          iconWidth={10}
          iconHeight={13}
        /> }
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
