var Profile = React.createClass({displayName: "Profile",
  mixins: [ParseReact.Mixin],

    render: function() {
        return (
            React.createElement("div", {className: "appCont"}, 
                React.createElement(ProfileHeader, null), 
                React.createElement(Projects, null), 
                React.createElement(Locatns, null)
            )
        );
    }
});

React.render(React.createElement(Profile, null), document.getElementById('profile'));
