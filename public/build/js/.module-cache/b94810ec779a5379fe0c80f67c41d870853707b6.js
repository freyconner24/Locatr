var Projects = React.createClass({displayName: "Projects",
    mixins: [ParseReact.Mixin],
	observe: function() {
        return {
            projects: (new Parse.Query('Project')
            .equalTo('user', Parse.User.current())
            .ascending('createdAt'))
        };
    },
    render: function() {
        console.log(this.data.projects);
		return (
			React.createElement("div", null, 
				React.createElement("div", null, "PROJECT"), 
                this.data.projects.map(function(project) {
				    return React.createElement("div", {onClick: this.showProject.bind(this, project.id), key: project.id}, React.createElement(ProjectRow, {project: project}))
                }, this)
            )
		);
	},
    showProject: function(projectId) {
        var Project = Parse.Object.extend("Project");
        var query = new Parse.Query(Project);
        query.get(projectId.objectId, {
            success: function(project) {
                renderProject(project);
                $("#project").show(400, function() {
                    var height = $('.projectPicCont').width() / 1.5;
                    $('.projectInfo .locatnPic').height(height);
                    $('.locatnsRow').fadeTo(400, 1);
                });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});