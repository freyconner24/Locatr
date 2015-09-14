var ProfileHeader = React.createClass({displayName: "ProfileHeader",
  render: function() {
    return (
        React.createElement("div", {className: "profileHeader"}, 
            React.createElement("div", {className: "profileHeaderCont"}, 
                React.createElement("div", {className: "logCont"}, 
                    React.createElement("div", {className: "login", onClick: this.login}, "login"), 
                    React.createElement("div", {className: "logout", onClick: this.logout}, "logout")
                ), 
                React.createElement("div", {className: "coverPhoto"}), 
                React.createElement("div", {className: "picNameCont"}, 
                    React.createElement("div", {className: "profilePic"}), 
                    React.createElement("div", {className: "name"}, "Derek Truong")
                )
            ), 
            React.createElement("div", {className: "whiteBlock"})
        )
    );
  },
  login: function() {
    Parse.User.logIn("connerfrey", "test", {
      success: function(user) {
        location.reload();
      },
      error: function(user, error) {
        alert("Login failed");
      }
    });
  },
  logout: function() {

  }
});