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
                React.createElement("div", {className: "locatnPic"}, 
                    React.createElement("div", {id: "editLocatnBackButton", className: "backButton", onClick: this.closeEditLocatn}, "back")
                ), 
                React.createElement("div", {className: "locatnText"}, 
                    React.createElement("div", {className: "locatnTitle"}, title), 
                    React.createElement("div", {className: "locatnDesc"}, description)
                ), 
                React.createElement("div", {className: "tagRow"}, 
                    profileTag
                ), 
                React.createElement("div", {className: "editModalButtons"}, 
                    React.createElement("div", {id: "cancelButton"}, "cancel"), 
                    React.createElement("div", {id: "updateButton"}, "update")
                )
            )
        );
    },
    closeEditLocatn: function() {
        $("#editLocatnModal").fadeTo(400, 0);
    }
});

function renderEditLocatnModal(locatn) {
    React.render(React.createElement(EditLocatnModal, {locatn: locatn}), document.getElementById('editLocatnModal'));    
}