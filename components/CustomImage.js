import PropTypes from "prop-types"

const CustomImage = props => {

    const imageName = src => {
        return src.split("/")[src.split("/").length - 1]
    }

    return props.src.startsWith("http") ?
    <img { ...props }/> :
    (props.src.startsWith("/static/images/") || props.src.startsWith("static/images/")) ?
    <img
        { ...props }
        src={ require(`../static/images/${ imageName(props.src) }?size=1000`) }
    /> :
    <img { ...props }/>

}

CustomImage.propTypes = {
    src: PropTypes.string.isRequired
}

export default CustomImage