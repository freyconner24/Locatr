
var ProfileApp = React.createClass({displayName: "ProfileApp",
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
    	console.log(this.data.locatns);
        return (
            React.createElement("div", {className: "profileAppCont"}, 
                React.createElement(Profile, null), 
                React.createElement(Project, {locatn: this.data.locatns[0]}), 
                React.createElement(Locatn, {locatns: this.data.locatns})
            )
        );
    }
});

React.render(React.createElement(ProfileApp, null), document.getElementById('profileApp'));
