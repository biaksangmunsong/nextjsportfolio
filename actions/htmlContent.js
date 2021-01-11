import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import CustomLink from "../components/CustomLink"
// import CustomImage from "../components/CustomImage"

const htmlContent = content => {

    return unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
        // img: CustomImage
      }
    })
    .processSync(content).result

}

export default htmlContent