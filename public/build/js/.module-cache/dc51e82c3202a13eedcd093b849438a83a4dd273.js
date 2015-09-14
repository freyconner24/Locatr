var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        return (
            React.createElement("div", {className: "locatnSelect"}, 
                React.createElement(ProfileHeader, null), 
                React.createElement(Projects, null), 
                React.createElement(Locatns, null), 
                React.createElement(Locatn, null)
            )
        );
    }
});