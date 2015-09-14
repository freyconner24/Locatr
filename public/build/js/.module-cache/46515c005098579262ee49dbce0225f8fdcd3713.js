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
			React.createElement("div", {className: "sectionCont row"}, 
				React.createElement("div", {className: "profileTitle row"}, "PROJECT"), 
                this.data.projects.map(function(project) {
				    React.createElement("div", {onClick: this.showProject.bind(this, project.id), key: project.id}, React.createElement(ProjectRow, {project: project}))
                }, this)
            )
		);
	},
    showProject: function(projectId) {
        console.log(projectId);
        var Project = Parse.Object.extend("Project");
        var query = new Parse.Query(Project);
        query.get(projectId.objectId, {
            success: function(project) {
                console.log("Success Project");
                console.log(project);
                renderProject(project);
                $("#project").show(400, function() {
                    $('.locatnsRow').fadeTo(400, 1);
                });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});