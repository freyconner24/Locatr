var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    render: function() {
        return (
            React.createElement("div", {className: "row locatnsRow"}, 
                React.createElement(ProjectLocatn, null)
            )
        );
    },
    
});

//map over the three passed in locations
//add a number to {}