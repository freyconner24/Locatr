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
        var title = "This Is A Title";
        var description = "This Is A Description";
        var imageFile = null;
        var imageURL = "/build/img/locatn.jpg";
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };

        var profileTag = null;


        if (this.data.locatn[0] !== undefined) {
            title = this.data.locatn[0].title;
            description = this.data.locatn[0].description;
            imageFile = this.data.locatn[0].picture;
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
            profileTag = (React.createElement(ProfileTag, {locatn: this.data.locatn[0]}));
        }

        return (
            React.createElement("div", {className: "locatnInfo"}, 
                React.createElement("div", {className: "row mapPicCont"}, 
                    React.createElement("div", {className: "col-sm-7 picCont"}, 
                        React.createElement("div", {className: "locatnPic", style: divStyle}, 
                            React.createElement("div", {className: "number"}, "1")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                            React.createElement("div", {className: "locatnDesc"}, description)
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-5 mapCont"}, 
                        React.createElement("div", {className: "map"}), 
                        React.createElement("div", {className: "tagRow"}, 
                            profileTag
                        )
                    )
                )
            )
        );
    },
    componentDidMount: function() {
        this.resizeLocatnPic();
        $(window).on('resize', this.resizeLocatnPic);
    },

    resizeLocatnPic: function () {
        var width = $('.mapCont').width();
        $('.map').height(width);
        $('.locatnInfo .locatnPic').height(width);

    }
});

React.render(React.createElement(Locatn, null), document.getElementById('locatn'));

//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.data.locatn[0]}/>


