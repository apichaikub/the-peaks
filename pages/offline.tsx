import Head from "next/head";
import Layout from "../components/Assemble/Layout";

const Index = () => {
  return (
    <>
      <Head>
        <title>Offline Mode | The Peaks</title>
      </Head>
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '70px 0' }}>
          <h1>You are in offline mode</h1>
        </div>
      </Layout>
    </>
  )
}

export default Index