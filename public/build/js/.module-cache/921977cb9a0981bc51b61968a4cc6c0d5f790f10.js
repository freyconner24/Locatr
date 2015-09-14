
var ProfileApp = React.createClass({displayName: "ProfileApp",
    render: function() {
        return (
            React.createElement("div", {className: "profileCont"}, 
                React.createElement(Profile, null), 
                React.createElement(Project, null), 
                React.createElement(Locatn, null)
            )
        );
    }
});

React.render(React.createElement(ProfileApp, null), document.getElementById('profileApp'));
