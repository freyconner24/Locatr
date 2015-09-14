var Profile = React.createClass({displayName: "Profile",
    render: function() {
        return (
            React.createElement("div", {className: "profileCont"}, 
                React.createElement(ProfileHeader, null), 
                React.createElement(Projects, null), 
                React.createElement(Locatns, {locatns: this.props.locatns})
            )
        );
    }
});
