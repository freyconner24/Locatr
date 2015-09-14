var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    render: function() {
        return (
            React.createElement("div", {className: "row locatnsRow"}, 
                this.props.locatnThree.map(function(locatn) {
                	React.createElement(ProjectLocatn, {locatn: locatn})
                })
            )
        );
    },
    
});

//map over the three passed in locations
//add a number to your json array {}