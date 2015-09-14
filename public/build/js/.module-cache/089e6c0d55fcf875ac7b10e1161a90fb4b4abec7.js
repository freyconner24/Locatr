var Project = React.createClass({displayName: "Project",
    //mixins: [ParseReact.Mixin],
    /*observe: function() {
        return {
            locatn: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt').limit(1))
        };
    },*/
    render: function() {
        //console.log(this.data.locatn[0]);
        /*var imageFile = this.data.locatn[0].picture;
        var imageURL = imageFile.url();
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };*/
        return (
            React.createElement("div", {className: "projectInfo"}, 
                React.createElement(ProjectLocatnRow, null)
            )
        );
    },
    componentDidMount: function() {
        this.resizeProjectLocatns();
        $(window).on('resize', this.resizeProjectLocatns);
    },

    resizeProjectLocatns: function () {
        var height = $('.projectPicCont').width() / 1.5;
        $('.projectInfo .locatnPic').height(height);

    }
});

React.render(React.createElement(Project, null), document.getElementById('project'));
//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.props.locatn[0]}/>

//pass the three locations after breaking them up in the render function



