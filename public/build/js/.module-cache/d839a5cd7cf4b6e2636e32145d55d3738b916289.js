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
                    React.createElement("div", {id: "editLocatnBackButton", className: "backButton", onClick: this.closeEditLocatn}, "back")
                ), 
                React.createElement("div", {className: "locatnText"}, 
                    React.createElement("input", {type: "text", id: "locatnTitleTextBox", className: "editTextBox editTitleTextBox"}), 
                    React.createElement("input", {type: "text", id: "locatnDescTextBox", className: "editTextBox editDescTextBox"}), 
                    React.createElement("input", {type: "text", id: "locatnTagTextBox", className: "editTextBox editTagTextBox", placeholder: "Add tags..."}), 
                    React.createElement("div", {className: "tagRow"}, 
                        profileTag
                    )
                ), 
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
            $("#editLocatnModal").hide(0);
        });
    },
    updateLocatn: function() {
        var title = $('#locatnTitleTextBox').val();
        var description = $('#locatnDescTextBox').val();
        var tags = $('#locatnTagTextBox').val();

        var Locatn = Parse.Object.extend("Locatn");
        var locatn = new Locatn();

        locatn.set("title", title);
        locatn.set("description", description);

        gameScore.save(null, {
            success: function(locatn) {
            },
            error: function(locatn, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    }
});

function renderEditLocatnModal(locatn) {
    React.render(React.createElement(EditLocatnModal, {locatn: locatn}), document.getElementById('editLocatnModal'));    
}