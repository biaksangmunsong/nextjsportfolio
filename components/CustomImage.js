import Image from "next/image"
import PropTypes from "prop-types"

const CustomImage = props => {

    // If the image is local it will start with a "/"
    // Otherwise it'll be something like "https://"

    return !props.src.startsWith("http") ?
    <div className="image__wrapper optimized">
        <Image
            src={ props.src }
            layout="fill"
            objectFit="cover"
            objectPosition="center"
        />
    </div> :
    <div className="image__wrapper not-optimized">
        <img { ...props }/>
    </div>

}

CustomImage.propTypes = {
    src: PropTypes.node.isRequired
}

export default CustomImage