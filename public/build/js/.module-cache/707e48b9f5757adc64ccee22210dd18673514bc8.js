var Project = React.createClass({displayName: "Project",
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
        var locatnArray = new Array();
        for(var i = 0; i < this.data.locatns.length; ++i) {
            
        }
        locatnArray.push();
        locatns
        return (
            React.createElement("div", {className: "projectInfo"}, 
                this.data.locatns.map(function(locatn) {
                    return React.createElement(ProjectLocatnRow, {locatn: locatn, key: locatn.id})
                })


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



