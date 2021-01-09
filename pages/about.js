import Head from "next/head"
import Header from "../components/Header"
import matter from "gray-matter"
import fs from "fs"
import path from "path"
import htmlContent from "../functions/htmlContent"
import AboutPage from "../styles/styled-components/pages/AboutPage"

const About = ({ metaData, content }) => {
    
    return (
        <>
            <Head>
                <title>{ metaData.title }</title>
                <meta name="description" content={ metaData.desc } key="description" />
            </Head>
            <AboutPage className="aboutpage">
                <Header/>
                <div className="__content">
                    { htmlContent(content) }
                </div>
            </AboutPage>
        </>
    )

}

export const getStaticProps = () => {

    let pageData = fs.readFileSync(path.join(process.cwd(), "page-data", "aboutPage.md")).toString()
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

export default About