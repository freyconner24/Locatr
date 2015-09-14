var ProfileTag = React.createClass({displayName: "ProfileTag",
    mixins: [ParseReact.Mixin],
    observe: function() {
        var Locatn = Parse.Object.extend("Locatn");
		var locatnId = this.props.locatn.id.objectId;

        return {
            tags: (new Parse.Query('Tag')
            .equalTo('Locatn', locatn)
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
