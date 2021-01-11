import PropTypes from "prop-types"

const CustomImage = props => {

    let imageName = props.src.split("/")[props.src.split("/").length-1]

    return !props.src.startsWith("http") ?
    <img src={ `https://res.cloudinary.com/biaksangmunsong/image/upload/_scale,f_auto,q_auto,w_1000/${ imageName }` }/> :
    <img { ...props }/>

}

CustomImage.propTypes = {
    src: PropTypes.node.isRequired
}

export default CustomImage