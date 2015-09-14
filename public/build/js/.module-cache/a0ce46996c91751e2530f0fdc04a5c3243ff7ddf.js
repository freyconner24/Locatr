var LocatnRow = React.createClass({displayName: "LocatnRow",
	render: function() {
	    var imageFile = this.props.locatn.picture;
      	var imageURL = imageFile.url();
	    
	    var divStyle = {
			backgroundImage: 'url(' + imageURL + ')'
		};
	    return (
	        React.createElement("div", {className: "locatnRow row"}, 
	            React.createElement("div", {className: "locatnPic", style: divStyle}), 
	            React.createElement("div", {className: "locatnText"}, 
	                React.createElement("div", {className: "locatnTitle"}, this.props.locatn.title, "  ", React.createElement("span", {className: "editText", onClick: this.editLocatn}, "edit")), 
	                React.createElement("div", {className: "locatnDesc"}, this.props.locatn.description)
	            ), 
	            React.createElement("div", {className: "arrowButton"}), 
	            React.createElement(ProfileTag, {locatnId: this.props.locatn.id.objectId})
	        )
    	);
 	},
 	editLocatn: function() {
 		var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(this.props.locatn.id.objectId, {
            success: function(locatn) {
                renderEditLocatnModal(locatn);
		        $("#editLocatnModal").fadeTo(400, 1, function() {
		            console.log("show edit locatn modal!");
		            var width = $('.editLocatnCont').width();
		            $('.editLocatnCont .locatnPic').width(width);
		            $('.editLocatnCont .locatnPic').height(width);
		            $('').addClass('noScroll');
		            //$('.editLocatnCont .locatnPic').fadeTo(400, 1);
		            $("#locatn").hide(0);
        			$('.mapPicCont').fadeTo(0, 0);
		        });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});