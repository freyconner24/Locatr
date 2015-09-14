var Projects = React.createClass({displayName: "Projects",
	render: function() {
		return (
			React.createElement("div", {className: "sectionCont row"}, 
				React.createElement("div", {className: "profileTitle row"}, "PROJECT"), 
				React.createElement("div", {onClick: this.showLocatn.bind(this, locatn.id), key: locatn.id}, React.createElement(ProjectRow, {project: project}))
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