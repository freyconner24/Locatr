var ProfileTag = React.createClass({displayName: "ProfileTag",
    mixins: [ParseReact.Mixin],
    observe: function() {
        var Locatn = Parse.Object.extend("Locatn");
		var locatnId = this.props.locatnId;

        return {
            tags: (new Parse.Query('Tag')
            .equalTo('locatn', new Locatn({id: locatnId}))
            .ascending('createdAt'))
        };
    },
    render: function() {
        console.log("ProfileTags::locatnId: " + this.props.locatnId);
        return (
            React.createElement("div", {className: "tagRow"}, 
				this.data.tags.map(function(tag) {
                    return React.createElement("div", {className: "tag"}, tag.text.toUpperCase())
                })
			)
        );
    }
});
