import Link from "next/link"
import PropTypes from "prop-types"

const CustomLink = ({ children, href }) => {

  return (href === "" || !href.startsWith("http")) ? (
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