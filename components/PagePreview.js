const PagePreview = props => {

    var entry = this.props.entry
    var body = entry.getIn(["data", "body"])
    console.log(body)

    return <div className="about_page_content">
        { props.widgetFor("body") }
    </div>

}

export default PagePreview