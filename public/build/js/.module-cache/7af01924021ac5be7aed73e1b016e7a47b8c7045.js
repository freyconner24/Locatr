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
                React.createElement("div", {className: "profileTitle row"}, "PROJECT ", React.createElement("span", {id: "newProjectBtn", onClick: this.showNewProject}, "new")), 
                this.data.projects.map(function(project) {
                    return React.createElement("div", {onClick: this.showProject.bind(this, project.id), key: project.id}, React.createElement(ProjectRow, {project: project}))
                }, this)
            )
        );
    },
    showNewProject: function() {
        var Project = Parse.Object.extend("Project");
        var project = new Project();

        project.set("user", Parse.User.current());
        project.set("title", title);
        project.set("description", description);

        var ProjectAndLocatn = Parse.Object.extend("ProjectAndLocatn");

        project.save(null, {
            success: function(project) {
                console.log('New PROJECT created with objectId: ' + project.id);
                for(var i = 0; i < checkBox.count; ++i) {
                    var projAndLoc = new ProjectAndLocatn();
                    projAndLoc.set("project", project);
                    projAndLoc.set("locatn", locatn);

                    projAndLoc.save(null, {
                        success: function(projAndLoc) {
                            console.log('New PROJECT_AND_LOC created with objectId: ' + project.id);
                        },
                        error: function(projAndLoc, error) {

                        }
                    });
                }
            },
            error: function(project, error) {
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
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
