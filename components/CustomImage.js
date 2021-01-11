import Image from "next/image"
import PropTypes from "prop-types"

const CustomImage = props => {

    // If the image is local it will start with a "/"
    // Otherwise it'll be something like "https://"

    return !props.src.startsWith("http") ?
    <img src={ `https://res.cloudinary.com/biaksangmunsong/image/upload/_scale,f_auto,q_auto,w_1000/${ props.src }` }/> :
    <img { ...props }/>

}

CustomImage.propTypes = {
    src: PropTypes.node.isRequired
}

export default CustomImage