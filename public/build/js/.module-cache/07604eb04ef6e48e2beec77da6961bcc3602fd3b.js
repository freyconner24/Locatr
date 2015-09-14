var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        return (
            React.createElement("div", {className: "locatn"}, 
                React.createElement("div", {className: "row mapPicCont"}, 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"})
                        )
                    ), 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "map"}
                        
                        )
                    )
                ), 
                React.createElement("div", {className: "locatnTitle"}, this.props.locatn.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                React.createElement("div", {className: "locatnDesc"}, this.props.locatn.description), 
                React.createElement(ProfileTag, null)
            )
        );
    }
});

React.render(React.createElement(Profile, null), document.getElementById('locatn'));