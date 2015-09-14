var ProjectRow = React.createClass({displayName: "ProjectRow",
  render: function() {
    return (
        React.createElement("div", {className: "locatnRow row"}, 
            React.createElement("div", {className: "locatnPic"}), 
            React.createElement("div", {className: "locatnText"}, 
                React.createElement("div", {className: "locatnTitle"}, this.props.project.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                React.createElement("div", {className: "locatnDesc"}, this.props.project.description)
            ), 
            React.createElement("div", {className: "arrowButton"})
        )
    );
  }
});