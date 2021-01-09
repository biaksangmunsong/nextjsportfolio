import Link from "next/link"
import PropTypes from "prop-types"

const CustomLink = ({ children, href }) => {

  // If the link is local it will start with a "/"
  // Otherwise it'll be something like "https://"

  return href.startsWith("/") || href === "" ? (
    <Link href={href}>
      <a>
        { children }
      </a>
    </Link>
  ) : (
    <a
      href={ href }
      target="_blank"
      rel="noopener noreferrer"
    >
      { children }
    </a>
  )
}

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
}

export default CustomLink