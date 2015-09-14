var ProfileHeader = React.createClass({
  render: function() {
    return (
        <div className='profileHeader'>
            <div className='profileHeaderCont'>
                <div className='logCont'>
                    <div className='login' onClick={this.login}>login</div>
                    <div className='logout' onClick={this.logout}>logout</div>
                </div>
                <div className='coverPhoto'></div>
                <div className='picNameCont'>
                    <div className='profilePic'></div>
                    <div className='name'>Derek Truong</div>
                </div>
            </div>
            <div className='whiteBlock'></div>
        </div>
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
    Parse.User.logOut();
    location.reload();
  }
});