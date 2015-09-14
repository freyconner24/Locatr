

var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
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
            React.createElement("div", {className: "row locatnsRow"}, 
                React.createElement(ProjectLocatn, null)
            )
        );
    }
});