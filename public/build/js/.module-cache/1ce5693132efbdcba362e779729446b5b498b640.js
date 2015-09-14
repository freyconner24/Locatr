var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        console.log(this.props.locatn);
        var title = "This Is A Title";
        var description = "This Is A Description";
        var longitude = 1;
        var latitude = 1;
        var imageFile = null;
        var imageURL = "/build/img/locatn.jpg";
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };

        var profileTag = null;
        var googleMapsURL = null;

        if (this.props.locatn !== undefined) {
            console.log("Locatn:: " + this.props.locatn.get("geo"));
            title = this.props.locatn.get("title");
            description = this.props.locatn.get("description");
            longitude = this.props.locatn.geo.longitude;
            latitude = this.props.locatn.geo.latitude;
            googleMapsURL = "https://www.google.com/maps/embed/v1/view?key=AIzaSyCy5yDD4sv5MpITNGhTgXLH5xF3bppXYoM&center=" + longitude + "," + latitude + "&zoom=18&maptype=satellite";
            imageFile = this.props.locatn.get("picture");
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
            console.log("Locatn::locatnId: " + this.props.locatn.id);
            profileTag = (React.createElement(ProfileTag, {locatnId: this.props.locatn.id}));
        }


        return (
            React.createElement("div", {className: "locatnInfo"}, 
                React.createElement("div", {className: "row mapPicCont"}, 
                    React.createElement("div", {className: "col-sm-7 picCont"}, 
                        React.createElement("div", {className: "locatnPic", style: divStyle}, 
                            React.createElement("div", {id: "locatnBackButton", className: "backButton", onClick: this.closeLocatn}, "back"), 
                            React.createElement("div", {className: "number"}, "1")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                            React.createElement("div", {className: "locatnDesc"}, description)
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-5 mapCont"}, 
                        React.createElement("div", {className: "map"}, React.createElement("iframe", {frameborder: "0", style: {border:0}, src: {googleMapsURL}, allowfullscreen: true})), 
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


        /*https://www.google.com/maps/embed/v1/view
          ?key=API_KEY
          &center=-33.8569,151.2152
          &zoom=18
          &maptype=satellite*/
    },

    resizeLocatnPic: function () {
        var width = $('.mapCont').width();
        $('.map').height(width);
        $('.locatnInfo .locatnPic').height(width);
    },
    closeLocatn: function() {
        $("#locatnBackButton").click(function() {
            $("#locatn").hide(400);
            $('.mapPicCont').fadeTo(400, 0);
        });
    }
});

function renderLocatn(locatn) {
    React.render(React.createElement(Locatn, {locatn: locatn}), document.getElementById('locatn'));    
}


//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.data.locatn[0]}/>


