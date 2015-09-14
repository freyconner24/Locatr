var Project = React.createClass({displayName: "Project",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatn: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt').limit(1))
        };
    },
    render: function() {
        console.log(this.data.locatn[0]);
        /*var imageFile = this.data.locatn[0].picture;
        var imageURL = imageFile.url();
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };*/
        return (
            React.createElement("div", {className: "projectInfo"}, 
                React.createElement("div", {className: "row locatnCont"}, 
                    React.createElement("div", {className: "col-sm-4 picCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "1")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas  ", React.createElement("span", {className: "editText"}, "edit")), 
                            React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine")
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4 picCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "2")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas  ", React.createElement("span", {className: "editText"}, "edit")), 
                            React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine")
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-4 picCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "3")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas  ", React.createElement("span", {className: "editText"}, "edit")), 
                            React.createElement("div", {className: "locatnDesc"}, "A music video about dreams. A lot of weird stuff happens, like switching to different scenery. The main boy runs through the forest and he gets trapped in a ravine")
                        )
                    )
                )
            )
        );
    },
    componentDidMount: function() {
        this.resizePhotos();
        $(window).on('resize', this.resizePhotos);
    },

    resizePhotos: function () {
        var width = $('.mapCont').width();
        $('.map').height(width);
        $('.locatnInfo .locatnPic').height(width);

    }
});

React.render(React.createElement(Project, null), document.getElementById('project'));

//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.props.locatn[0]}/>


