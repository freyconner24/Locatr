var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    render: function() {
        return (
            React.createElement("div", {className: "row locatnsRow"}, 
                this.props.locatnThree.map(function() {
                	React.createElement(ProjectLocatn, {locatnThree: this.props.locatnThree})
                })
            )
        );
    },
    
});

//map over the three passed in locations
//add a number to your json array {}