import Link from "next/link"
import PropTypes from "prop-types"
import getYoutubeId from "get-youtube-id"

const CustomLink = ({ children, href }) => {

  const youtubeId = getYoutubeId(href, { fuzzy: false })

  return (href === "" || !href.startsWith("http")) ?
    <Link href={href}>
      <a>
        { children }
      </a>
    </Link> :
    youtubeId ?
    <span className="youtube__video">
      <iframe
        src={ `https://www.youtube.com/embed/${ youtubeId }` }
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      ></iframe>
    </span> :
    <a
      href={ href }
      target="_blank"
      rel="noopener noreferrer"
    >
      { children }
    </a>
}

CustomLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default CustomLink