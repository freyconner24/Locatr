var Projects = React.createClass({
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
            <div className='sectionCont row'>
                <div className='profileTitle row'>PROJECT <span id='newProjectBtn' onClick={this.showNewProject}>new</span></div>
                {this.data.projects.map(function(project) {
                    return <div onClick={this.showProject.bind(this, project.id)} key={project.id}><ProjectRow project={project} /></div>
                }, this)}
            </div>
        );
    },
    showNewProject: function() {
        
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
