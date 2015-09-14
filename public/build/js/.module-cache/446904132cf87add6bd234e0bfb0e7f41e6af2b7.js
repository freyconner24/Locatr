var ProfileTag = React.createClass({displayName: "ProfileTag",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Tag')
            .equalTo('Locatn', this.props.locatn)
            .ascending('createdAt'))
        };
    },
    render: function() {
        return (
            React.createElement("div", {className: "tagRow"}, 
				this.data.tags.map(function(tag) {
                    return React.createElement("div", {className: "tag"}, tag.text)
                })
			)
        );
    }
});
