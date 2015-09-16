var NewProject = React.createClass({
    render: function() {
        return (
            <div className='newProjectCont'>
                <div id="newProjectBackButton" className='backButton' onClick={this.closeEditLocatn}>back</div>
                <div className='newProjectText'>
                    <input type='text' id='newProjectTitleTextBox' className='editTextBox editTitleTextBox' />
                    <input type='text' id='newProjectDescTextBox' className='editTextBox editDescTextBox' />
                </div>
                <br/>
                <div className='newProjectButtons'>
                    <div className='cancelButton' onClick={this.closeNewProject}>cancel</div>
                    <div id='createButton' onClick={this.createNewProject}>update</div>
                </div>
                <div className='createdMessage'>CREATED</div>
            </div>
        );
    },
    componentDidMount: function() {
        $('#locatnTitleTextBox').val(this.props.locatn.get("title"));
        $('#locatnDescTextBox').val(this.props.locatn.get("description"));
    },
    createNewProject: function() {
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
                            if(i - 1 == checkBox.count) { //if is the last element
                                $("#newProjectCont").fadeTo(400, 0, function() {
                                    $('body').removeClass('noScroll');
                                    $("#newProjectCont").hide(0);
                                });
                            }
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
    updateLocatn: function() {
        var title = $('#locatnTitleTextBox').val();
        var description = $('#locatnDescTextBox').val();

        var locatn = this.props.locatn;
        locatn.set("title", title);
        locatn.set("description", description);


        locatn.save(null, {
            success: function(locatn) {
                var tags = $('#locatnTagTextBox').val();
                if(tags !== "") {
                    tags = tags.toLowerCase();
                    var tags = tags.split(" ");
                    for(var i = 0; i < tags.length; ++i) {
                        console.log(tags[i]);
                        var Tag = Parse.Object.extend("Tag");
                        var tag = new Tag();
                        tag.set("text", tags[i]);
                        tag.set("locatn", locatn);
                        tag.save();
                    }
                }

                $('#locatnTitleTextBox').val(title);
                $('#locatnDescTextBox').val(description);
                $('.updatedMessage').show(400, function() {
                    setTimeout("$('.updatedMessage').hide(400);", 3000);
                });
                renderEditLocatnModal(locatn);
            },
            error: function(locatn, error) {
            }
        });
    },
    deleteLocatn: function() {
    var locatn = this.props.locatn
    locatn.destroy({
        success: function(locatn) {
            alert("success");
            this.closeEditLocatn();
        },
        error: function(locatn, error) {
            alert("error");
            // The delete failed.
            // error is a Parse.Error with an error code and message.
    }
});
    }
});

function renderNewProject() {
    React.render(<NewProject />, document.getElementById('newProject'));
}
