import Head from 'next/head'
import Layout from '../../components/Assemble/Layout'
import Content from '../../components/Assemble/Content'
import useSearch from '../../hook/useSearch'
import { NewsContent } from '../../constants/news'
import { getDetail } from '../../services/guardian/news.api'
import { transformContent } from '../../services/guardian/_transform'
import { getId } from '../../helpers/utils'

type Props = {
  content: NewsContent
}

const Index = ({ content } : Props) => {
  const { handleSearchSubmit } = useSearch()

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
          isSaved={true}
          createdAt={content.createdAt}
          topic={content.title}
          summary={content.summary}
          detail={content.detail}
          image={{ 
            src: content.image.src,
            caption: '',
          }}
        />
      </Layout>
    </div>
  )
}

Index.getInitialProps = async ({ query } : any) => {
  const all : String[] = query.all ? Array.from(query.all) : []
  const id = getId(all)
  
  // TODO: try catch, redirect to error pages
  const json = await getDetail(id, {
    'show-elements': 'all',
    'show-fields': 'thumbnail,trailText,headline,body',
  })

  return {
    content: transformContent(json.data.response.content),
  }
}

export default Index
