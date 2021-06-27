import Head from 'next/head'
import TheHeader from '../components/Assemble/TheHeader'
import TopStory from '../components/Assemble/TopStory'
import News from '../components/Assemble/News'
import Footer from '../components/Assemble/TheFooter'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHeader/>
      <TopStory title="Top stories"/>
      <News title="News" />
      <Footer/>
    </div>
  )
}
