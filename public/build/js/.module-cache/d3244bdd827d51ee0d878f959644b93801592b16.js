var ProjectLocatnRow = React.createClass({displayName: "ProjectLocatnRow",
    render: function() {
        return (
            React.createElement("div", {className: "row locatnsRow"}, 
                this.props.locatnThree.map(function(locatnAndNum) {
                	return React.createElement("div", {onClick: this.showLocatnFromProject.bind(this, locatnAndNum.locatn.id), key: locatnAndNum.locatn.id}, React.createElement(ProjectLocatn, {locatnAndNum: locatnAndNum}))
                }, this)
            )
        );
    },
    showLocatnFromProject: function(locatnId) {
        var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(locatnId.objectId, {
            success: function(locatn) {
                renderLocatn(locatn);
                $("#locatn").show(400, function() {
                    var width = $('.mapCont').width();
                    $('.map').height(width);
                    $('.locatnInfo .locatnPic').height(width);
                    $('.mapPicCont').fadeTo(400, 1);
                });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
    
});
