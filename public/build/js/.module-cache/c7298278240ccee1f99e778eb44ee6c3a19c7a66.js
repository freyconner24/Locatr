var ProjectLocatn = React.createClass({displayName: "ProjectLocatn",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                    React.createElement("div", {className: "locatnPic"}, 
                        React.createElement("div", {className: "number"}, "1")
                    ), 
                    React.createElement("div", {className: "locatnText"}, 
                        React.createElement("div", {className: "locatnTitle"}, this.props.locatn[0].title), 
                        React.createElement("div", {className: "locatnDesc"}, this.props.locatn[0].description)
                    )
                ), 
                React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                    React.createElement("div", {className: "locatnPic"}, 
                        React.createElement("div", {className: "number"}, "2")
                    ), 
                    React.createElement("div", {className: "locatnText"}, 
                        React.createElement("div", {className: "locatnTitle"}, this.props.locatn[1].title), 
                        React.createElement("div", {className: "locatnDesc"}, this.props.locatn[1].description)
                    )
                ), 
                React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                    React.createElement("div", {className: "locatnPic"}, 
                        React.createElement("div", {className: "number"}, "3")
                    ), 
                    React.createElement("div", {className: "locatnText"}, 
                        React.createElement("div", {className: "locatnTitle"}, this.props.locatn[2].title), 
                        React.createElement("div", {className: "locatnDesc"}, this.props.locatn[2].description)
                    )
                )
            )
        );
    }
});


//








