import Head from 'next/head'
import TheHeader from '../../components/Assemble/TheHeader'
import SearchResult from '../../components/Assemble/SearchResult'
import Footer from '../../components/Assemble/TheFooter'
import Loading from '../../components/Base/Loading'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Search results | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHeader/>
      {/* <Loading/> */}
      <SearchResult/>
      <Footer/>
    </div>
  )
}
