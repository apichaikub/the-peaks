import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Assemble/Layout'
import Content from '../../components/Assemble/Content'
import { NewsContent } from '../../constants/news'
import { getDetail } from '../../services/guardian/news.api'

const transformContent = (result: any) : NewsContent => {
  return {
    title: result?.fields?.headline,
    summary: result?.fields?.trailText,
    createdAt: result?.webPublicationDate,
    detail: result?.fields?.body,
    image: {
      src: result?.fields?.thumbnail,
    }
  }
}

const getId = (all: String[]) : String => {
  return all.join('/')
}

type Props = {
  content: NewsContent
}

const Index = ({ content } : Props) => {
  return (
    <div>
      <Head>
        <title>{ content.title }</title>
        <meta name="description" content={ content.summary ? content.summary.toString() : '' } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout loading={false}>
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
