import Head from 'next/head'
import TheHeader from '../../components/Assemble/TheHeader'
import Footer from '../../components/Assemble/TheFooter'
import Loading from '../../components/Base/Loading'
import Bookmark from '../../components/Assemble/Bookmark'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Bookmark | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHeader/>
      {/* <Loading/> */}
      <Bookmark/>
      <Footer/>
    </div>
  )
}
