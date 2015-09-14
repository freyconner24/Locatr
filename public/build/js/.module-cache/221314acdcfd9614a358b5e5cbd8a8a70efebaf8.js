React.createElement("div", {className: "tagRow"}, 
	React.createElement("div", {className: "tag"}, "MOUNTAIN"), 
	React.createElement("div", {className: "tag"}, "BEACH"), 
	React.createElement("div", {className: "tag"}, "OCEAN"), 
	React.createElement("div", {className: "tag"}, "SUNSET")
)

var ProfileTag = React.createClass({displayName: "ProfileTag",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt'))
        };
    },
    render: function() {
        return (
            React.createElement("div", {className: "sectionCont row"}, 
                React.createElement("div", {className: "profileTitle row"}, "LOCATNS"), 
                this.data.locatns.map(function(locatn) {
                    return React.createElement(LocatnRow, {locatn: locatn, key: locatn.id})
                })
            )
        );
    }
});
