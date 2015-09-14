var ProfileHeader = React.createClass({displayName: "ProfileHeader",
  render: function() {
    return (
        React.createElement("div", {className: "profileHeader"}, 
            React.createElement("div", {className: "login"}, "login"), 
            React.createElement("div", {className: "logout"}, "logout"), 
            React.createElement("div", {className: "profileHeaderCont"}, 
                React.createElement("div", {className: "coverPhoto"}), 
                React.createElement("div", {className: "picNameCont"}, 
                    React.createElement("div", {className: "profilePic"}), 
                    React.createElement("div", {className: "name"}, "Derek Truong")
                )
            ), 
            React.createElement("div", {className: "whiteBlock"})
        )
    );
  }
});