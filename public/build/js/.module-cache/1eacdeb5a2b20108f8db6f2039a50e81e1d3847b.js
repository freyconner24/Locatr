var Projects = React.createClass({displayName: "Projects",
	render: function() {
		return (
			React.createElement("div", {className: "sectionCont row"}, 
				React.createElement("div", {className: "profileTitle row"}, "PROJECT"), 
				React.createElement(ProjectRow, null)
			)
		);
	},
    showProject: function(projectId) {
        console.log(projectId);
        var Project = Parse.Object.extend("Project");
        var query = new Parse.Query(Project);
        query.get(projectId.objectId, {
            success: function(project) {
                console.log("Success");
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