import Head from 'next/head'
import Layout from '../../components/Assemble/Layout'
import Bookmark from '../../components/Assemble/Bookmark'
import useSearch from '../../hook/useSearch'

export default function Index() {
  const { handleSearchSubmit } = useSearch()

  return (
    <div>
      <Head>
        <title>Bookmark | The Peaks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        onSearchSubmit={handleSearchSubmit}
      >
        <Bookmark/>
      </Layout>
    </div>
  )
}
