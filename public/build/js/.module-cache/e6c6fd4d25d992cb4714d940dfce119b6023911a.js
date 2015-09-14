var LocatnRow = React.createClass({displayName: "LocatnRow",
	render: function() {
	    var imageFile = this.props.locatn.get("picture");
      	var imageURL = imageFile.url();
	    
	    var divStyle = {
			backgroundImage: 'url(' + imageURL + ')'
		};
	    return (
	        React.createElement("div", {className: "locatnRow row"}, 
	            React.createElement("div", {className: "locatnPic", style: divStyle}), 
	            React.createElement("div", {className: "locatnText"}, 
	                React.createElement("div", {className: "locatnTitle"}, this.props.locatn.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
	                React.createElement("div", {className: "locatnDesc"}, this.props.locatn.description)
	            ), 
	            React.createElement("div", {className: "arrowButton"}), 
	            React.createElement(ProfileTag, {locatn: this.props.locatn})
	        )
    	);
 	}
});