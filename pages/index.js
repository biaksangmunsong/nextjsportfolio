import { useEffect } from "react"
import Head from "next/head"
import fs from "fs"
import path from "path"
import HomePage from "../styles/styled-components/pages/HomePage"
import Header from "../components/Header"

const Home = ({ pageData }) => {

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user){
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
          })
        }
      })
    }
  }, [])

  const imageName = src => {
    return src.split("/")[src.split("/").length - 1]
  }
  
  return (
    <>
      <Head>
        <title>{ pageData.title }</title>
        <meta name="description" content={ pageData.description } key="description" />
      </Head>
      <HomePage className="homepage">
        <Header/>
        <div className="__content">
          <h1>{ pageData.heading1 }</h1>
          <img
            src={ require(`../static/images/${ imageName(pageData.cover_image) }?size=1000`) }
            // alt={ pageData.content.coverImage.alt }
            // title={ pageData.content.coverImage.title }
          />
          <p>{ pageData.paragraph1 }</p>
        </div>
      </HomePage>
    </>
  )
}

export const getStaticProps = () => {

  let pageData = fs.readFileSync(path.join(process.cwd(), "page-data", "indexPage.json"))
  pageData = JSON.parse(pageData)

  return {
    props: {
      pageData
    }
  }

}

export default Home