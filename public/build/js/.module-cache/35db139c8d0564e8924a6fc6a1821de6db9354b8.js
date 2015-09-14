var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        return (
            React.createElement("div", {className: "locatnSelect"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "locatnPic"}
                        
                        )
                    ), 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "map"}
                        
                        )
                    )
                ), 
                React.createElement("div", {className: "locatnTitle"})
            )
        );
    }
});