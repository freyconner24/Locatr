var EditLocatnModal = React.createClass({displayName: "EditLocatnModal",
    render: function() {
        console.log("render edit locatn modal!");
        console.log(this.props.locatn);
        var title = "This Is A Title";
        var description = "This Is A Description";
        var imageFile = null;
        var imageURL = "/build/img/locatn.jpg";
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };

        var profileTag = null;

        if (this.props.locatn !== undefined) {
            title = this.props.locatn.get("title");
            description = this.props.locatn.get("description");
            imageFile = this.props.locatn.get("picture");
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
            profileTag = (React.createElement(ProfileTag, {locatnId: this.props.locatn.id}));
        }
        return (
            React.createElement("div", {className: "editLocatnCont"}, 
                React.createElement("div", {className: "locatnPic", style: divStyle}, 
                    React.createElement("div", {id: "editLocatnBackButton", className: "backButton", onClick: this.closeEditLocatn}, "back"), 
                    React.createElement("div", {id: "editLocatnDeleteButton", className: "deleteButton", onClick: this.deleteLocatn}, "delete")
                ), 
                React.createElement("div", {className: "locatnText"}, 
                    React.createElement("input", {type: "text", id: "locatnTitleTextBox", className: "editTextBox editTitleTextBox"}), 
                    React.createElement("input", {type: "text", id: "locatnDescTextBox", className: "editTextBox editDescTextBox"}), 
                    React.createElement("input", {type: "text", id: "locatnTagTextBox", className: "editTextBox editTagTextBox", placeholder: "Add tags..."}), 
                    React.createElement("div", {className: "tagRow"}, 
                        profileTag
                    )
                ), 
                React.createElement("br", null), 
                React.createElement("div", {className: "editModalButtons"}, 
                    React.createElement("div", {id: "cancelButton", onClick: this.closeEditLocatn}, "cancel"), 
                    React.createElement("div", {id: "updateButton", onClick: this.updateLocatn}, "update")
                )
            )
        );
    },
    componentDidMount: function() {
        $('#locatnTitleTextBox').val(this.props.locatn.get("title"));
        $('#locatnDescTextBox').val(this.props.locatn.get("description"));
    },
    closeEditLocatn: function() {
        $("#editLocatnModal").fadeTo(400, 0, function() {
            $('body').removeClass('noScroll');
            $("#editLocatnModal").hide(0);
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

function renderEditLocatnModal(locatn) {
    React.render(React.createElement(EditLocatnModal, {locatn: locatn}), document.getElementById('editLocatnModal'));    
}