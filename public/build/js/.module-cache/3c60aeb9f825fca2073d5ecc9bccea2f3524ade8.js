var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        return (
            React.createElement("div", {className: "locatn"}, 
                React.createElement("div", {className: "row"}, 
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
                React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas"), 
                React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine"), 
                React.createElement(ProfileTag, null)
            )
        );
    }
});

React.render(React.createElement(Profile, null), document.getElementById('locatn'));