var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    render: function() {
        return (
            React.createElement("div", {className: "row locatnsRow"}, 
                this.props.locatnThree.map(function(locatnAndNum) {
                	return React.createElement(ProjectLocatn, {locatnAndNum: locatnAndNum, key: locatnAndNum.locatn.id})
                })
            )
        );
    },
    
});
