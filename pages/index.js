import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import htmlContent from "../functions/htmlContent"
import HomePage from "../styles/styled-components/pages/HomePage"
import Header from "../components/Header"

const Home = ({ metaData, content }) => {
  
  return (
    <>
      <Head>
        <title>{ metaData.title }</title>
        <meta name="description" content={ metaData.desc } key="description" />
      </Head>
      <HomePage className="homepage">
        <Header/>
        <div className="__content">
          { htmlContent(content) }
        </div>
      </HomePage>
    </>
  )
}

export const getStaticProps = () => {

  let pageData = fs.readFileSync(path.join(process.cwd(), "page-data", "indexPage.md")).toString()
  pageData = matter(pageData)
  
  const metaData = pageData.data
  const content = pageData.content

  return {
    props: {
      metaData,
      content
    }
  }

}

export default Home