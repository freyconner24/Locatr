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
        var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(projectId.objectId, {
            success: function(project) {
                console.log("Success");
                console.log(project.get("description"));
                renderLocatn(project);
                $("#project").show(400, function() {
                    var width = $('.mapCont').width();
                    $('.locatnsRow').fadeTo(400, 1);
                });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});