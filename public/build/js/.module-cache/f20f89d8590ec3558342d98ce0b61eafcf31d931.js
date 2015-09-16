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
    	console.log("ProjectApp.js: " + this.data.locatns);
        return (
            React.createElement("div", {className: "profileAppCont"}, 
                React.createElement(Profile, {locatns: this.data.locatns}), 
                React.createElement(Project, {locatns: this.data.locatns}), 
                React.createElement(Locatn, {locatn: this.data.locatns[0]})
            )
        );
    }
});

React.render(React.createElement(ProfileApp, null), document.getElementById('profileApp'));
