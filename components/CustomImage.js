import PropTypes from "prop-types"

const CustomImage = props => {

    const image = src => {
        const imageName = src.split("/")[src.split("/").length - 1]
        return require(`../static/images/${ imageName }?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
    }

    return props.src.startsWith("http") ?
    <img { ...props }/> :
    (props.src.startsWith("/static/images/") || props.src.startsWith("static/images/")) ?
    <img
        { ...props }
        src={ image(props.src).src }
        srcSet={ image(props.src).srcSet }
    /> :
    <img { ...props }/>

}

CustomImage.propTypes = {
    src: PropTypes.string.isRequired
}

export default CustomImage