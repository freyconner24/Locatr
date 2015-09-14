var LocatnRow = React.createClass({displayName: "LocatnRow",
  render: function() {
    return (
        React.createElement("div", {className: "locatnRow row"}, 
            React.createElement("div", {className: "locatnPic"}), 
            React.createElement("div", {className: "locatnText"}, 
                React.createElement("div", {className: "locatnTitle"}, "Vibrant Dreams And A Blank Canvas  ", React.createElement("span", {className: "editText"}, "edit")), 
                React.createElement("div", {className: "locatnDesc"}, "A music video about dreams.  A lot of weird stuff happens, like switching to different scenery.  The main boy runs through the forest and he gets trapped in a ravine")
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