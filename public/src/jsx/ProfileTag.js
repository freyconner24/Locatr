var ProfileTag = React.createClass({
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
        console.log("ProfileTag::locatnId: " + this.props.locatnId);
        return (
            <div className='tagRow'>
				{this.data.tags.map(function(tag) {
                    return <div className='tag'>{tag.text.toUpperCase()}</div>
                })}
			</div>
        );
    }
});