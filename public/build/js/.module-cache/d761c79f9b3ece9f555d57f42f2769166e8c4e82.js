var LocatnRow = React.createClass({displayName: "LocatnRow",
	render: function() {
	    return (
	        React.createElement("div", {className: "locatnRow row"}, 
	            React.createElement("div", {className: "locatnPic"}), 
	            React.createElement("div", {className: "locatnText"}, 
	                React.createElement("div", {className: "locatnTitle"}, "  ", React.createElement("span", {className: "editText"}, "edit")), 
	                React.createElement("div", {className: "locatnDesc"})
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