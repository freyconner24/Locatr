var Locatns = React.createClass({displayName: "Locatns",
  render: function() {
    return (
        React.createElement("div", {className: "sectionCont row"}, 
            React.createElement("div", {className: "profileTitle row"}, "PROJECT"), 
            React.createElement(LocatnRow, null)
        )
    );
  }
});