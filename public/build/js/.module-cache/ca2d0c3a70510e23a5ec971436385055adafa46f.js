var Locatn = React.createClass({displayName: "Locatn",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatn: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt').limit(1))
        };
    },
    render: function() {
        console.log(this.data.locatn[0]);
        if(locatn[0] != null) {
            var imageFile = this.data.locatn[0].picture;
            var imageURL = imageFile.url();
            
            var divStyle = {
                backgroundImage: 'url(' + imageURL + ')'
            };
        }
        return (
            React.createElement("div", {className: "locatn"}, 
                React.createElement("div", {className: "row mapPicCont"}, 
                    React.createElement("div", {className: "col-md-8"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"})
                        )
                    ), 
                    React.createElement("div", {className: "col-md-4"}, 
                        React.createElement("div", {className: "map"}
                        
                        )
                    )
                ), 
                React.createElement("div", {className: "locatnTitle"}, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                React.createElement("div", {className: "locatnDesc"}), 
                React.createElement(ProfileTag, {locatn: this.props.locatn})
            )
        );
    },
    componentDidMount: function() {
        this.resizePhotos();
        $(window).on('resize', this.resizePhotos);
    },

    resizePhotos: function () {
        var width = $('.col-md-4').width();
        $('.map').height(width);
    }
});

React.render(React.createElement(Locatn, null), document.getElementById('locatn'));

//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic


