

var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    render: function() {
        return (
            React.createElement("div", {className: "row locatnsRow"}, 
                React.createElement(ProjectLocatn, null)
            )
        );
    }
});