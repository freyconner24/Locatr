var Project = React.createClass({displayName: "Project",
    mixins: [ParseReact.Mixin],
    observe: function() {
        var Project = Parse.Object.extend("Project");
        var project = new Project();
        project.id = this.props.project.id;

        return {
            locatns: (new Parse.Query('ProjectAndLocatn')
            .include('locatn')
            .equalTo('project', project)
            .ascending('createdAt'))
        };
    },
    render: function() {
        if (this.data.locatns[0] !== undefined) {
            console.log(this.data.locatns);
            var locatnArray = new Array();
            var threeLocatns = new Array();
            var numbers = new Array();
            for(var i = 0; i < this.data.locatns.length; ) {
                var locatnAndNum = {};
                locatnAndNum.locatn = this.data.locatns[j].locatn;
                locatnAndNum.number = i + 1;
                threeLocatns.push(locatnAndNum);
                if (i % 3 === 2) {
                    locatnArray.push(threeLocatns);
                    threeLocatns = [];    
                }
            }

            console.log(locatnArray);
            return (
                React.createElement("div", {className: "projectInfo"}, 
                    React.createElement("div", {id: "projectBackButton", className: "backButton", onClick: this.closeProject}, "back"), 
                    React.createElement("div", {className: "projectTitle"}, this.props.project.get("title"), "  ", React.createElement("span", {className: "editText"}, "edit")), 
                    React.createElement("div", {className: "projectDesc"}, this.props.project.get("description")), 
                    locatnArray.map(function(locatnThree) {
                        return React.createElement(ProjectLocatnRow, {locatnThree: locatnThree})
                    })
                )
            );
        } else {
            return (
                React.createElement("div", {className: "projectInfo"}, 
                    React.createElement("div", {id: "projectBackButton", className: "backButton", onClick: this.closeProject}, "back"), 
                    React.createElement("div", {className: "projectTitle"}, "Project Title"), 
                    React.createElement("div", {className: "projectDesc"}, "You have no locatns in this project")
                )
            );
        } 
    },
    componentDidMount: function() {
        this.resizeProjectLocatns();
        $(window).on('resize', this.resizeProjectLocatns);
    },
    resizeProjectLocatns: function () {
        var height = $('.projectPicCont').width() / 1.5;
        $('.projectInfo .locatnPic').height(height);
    },
    closeProject: function() {
        $("#projectBackButton").click(function() {
            $("#project").hide(400);
            $('.locatnsRow').fadeTo(400, 0);
        });
    }
});

function renderProject(project) {
    React.render(React.createElement(Project, {project: project}), document.getElementById('project'));
}
//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.props.locatn[0]}/>

//pass the three locations after breaking them up in the render function



