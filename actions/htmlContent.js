import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import CustomLink from "../components/CustomLink"
import CustomParagraph from "../components/CustomParagraph"

const htmlContent = content => {

    return unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
        p: CustomParagraph
      }
    })
    .processSync(content).result

}

export default htmlContent