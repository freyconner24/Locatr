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

//inside the render function, break up the locatns by 3 by however many rows I need
