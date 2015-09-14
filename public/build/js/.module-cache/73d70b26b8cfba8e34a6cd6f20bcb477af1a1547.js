React.createElement("div", {className: "row locatnsRow"}, 
                    React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "1")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas"), 
                            React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine")
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "2")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas"), 
                            React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine")
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "3")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas"), 
                            React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine")
                        )
                    )
                )

var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt'))
        };
    },
    render: function() {
        console.log("ProjectApp.js: " + this.data.locatns);
        return (
            React.createElement("div", {className: "profileAppCont"}, 
                React.createElement(Profile, {locatns: this.data.locatns}), 
                React.createElement(Project, {locatns: this.data.locatns}), 
                React.createElement(Locatn, {locatn: this.data.locatns[0]})
            )
        );
    }
});