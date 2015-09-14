
var ProfileApp = React.createClass({displayName: "ProfileApp",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatn: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt'))
        };
    },
    render: function() {
        return (
            React.createElement("div", {className: "profileAppCont"}, 
                React.createElement(Profile, null), 
                React.createElement(Project, {locatn: this.data.locatn}), 
                React.createElement(Locatn, null)
            )
        );
    }
});

React.render(React.createElement(ProfileApp, null), document.getElementById('profileApp'));
