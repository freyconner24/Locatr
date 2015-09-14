var Locatn = React.createClass({displayName: "Locatn",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt')
            .limit(1))
        };
    },
    render: function() {
        var imageFile = this.props.locatn.picture;
        var imageURL = imageFile.url();
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };
        return (
            React.createElement("div", {className: "locatn"}, 
                React.createElement("div", {className: "row mapPicCont"}, 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "locatnPic", style: divStyle}, 
                            React.createElement("div", {className: "number"})
                        )
                    ), 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "map"}
                        
                        )
                    )
                ), 
                React.createElement("div", {className: "locatnTitle"}, this.data.locatn.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                React.createElement("div", {className: "locatnDesc"}, this.data.locatn.description), 
                React.createElement(ProfileTag, null)
            )
        );
    }
});

React.render(React.createElement(Locatn, null), document.getElementById('locatn'));