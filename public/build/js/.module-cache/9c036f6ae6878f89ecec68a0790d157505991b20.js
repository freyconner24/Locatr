var Projects = React.createClass({displayName: "Projects",
  render: function() {
    return (
        React.createElement("div", {className: "sectionCont row"}, 
            React.createElement("div", {className: "profileTitle row"}, "PROJECT"), 
            React.createElement(ProjectRow, null)
        )
    );
  }
});