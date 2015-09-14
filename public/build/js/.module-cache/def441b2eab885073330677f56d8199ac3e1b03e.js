var ProjectRow = React.createClass({displayName: "ProjectRow",
  render: function() {
    if(this.props.project == undefined) {

    }
    console.log(this.props.project);
    return (
        React.createElement("div", {className: "locatnRow row"}, 
            React.createElement("div", {className: "locatnPic"}), 
            React.createElement("div", {className: "locatnText"}, 
                React.createElement("div", {className: "locatnTitle"}, this.props.project.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                React.createElement("div", {className: "locatnDesc"}, this.props.project.description)
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