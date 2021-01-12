// import htmlContent from "../../actions/htmlContent"
CMS.registerPreviewStyle("/admin/styles/page-preview.css")

const PagePreview = createClass({
    render: function(){
        var entry = this.props.entry
        var body = entry.getIn(["data", "body"])
        console.log(body)
    
        return h(
            "div",
            { className: "about_page_content" },
            this.props.widgetFor("body")
        )
    }
})

CMS.registerPreviewTemplate("about_page", PagePreview)