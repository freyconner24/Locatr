var LocatnRow = React.createClass({displayName: "LocatnRow",
	render: function() {
	    var imageFile = this.props.locatn.picture;
      	var imageURL = imageFile.url();
	    
	    var divStyle = {
			backgroundImage: 'url(' + imageURL + ')'
		};
	    return (
	        React.createElement("div", {className: "locatnRow row"}, 
	            React.createElement("div", {className: "locatnPic"}), 
	            React.createElement("div", {className: "locatnText"}, 
	                React.createElement("div", {className: "locatnTitle"}, this.props.locatn.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
	                React.createElement("div", {className: "locatnDesc"}, this.props.locatn.description)
	            ), 
	            React.createElement("div", {className: "arrowButton"}), 
	            React.createElement("div", {className: "tagRow"}, 
	                React.createElement("div", {className: "tag"}, "MOUNTAIN"), 
	                React.createElement("div", {className: "tag"}, "BEACH"), 
	                React.createElement("div", {className: "tag"}, "OCEAN"), 
	                React.createElement("div", {className: "tag"}, "SUNSET")
	            )
	        )
    	);
 	}
});