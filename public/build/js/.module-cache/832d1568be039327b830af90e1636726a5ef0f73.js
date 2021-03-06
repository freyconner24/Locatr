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
            title = this.props.locatn.get("title");
            description = this.props.locatn.get("description");
            longitude = this.props.locatn.get("geo").longitude;
            latitude = this.props.locatn.get("geo").latitude;
            console.log(longitude + " " + latitude);
            googleMapsURL = "https://www.google.com/maps/embed/v1/view?key=AIzaSyCy5yDD4sv5MpITNGhTgXLH5xF3bppXYoM&center=" + latitude + "," + longitude + "&zoom=18&maptype=satellite";
            imageFile = this.props.locatn.get("picture");
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
            profileTag = (React.createElement(ProfileTag, {locatnId: this.props.locatn.id}));
        }
        
        this.initializeMap(latitude, longitude);
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
                        React.createElement("div", {className: "map", id: "mapCanvas"}), 
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
        //this.initializeMap(-34.397, 150.644);
        //google.maps.event.addDomListener(window, 'load', function() {initializeMap(-100, 100);}); // Execute our 'initialize' function once the page has loaded. 
        $(window).on('resize', this.resizeLocatnPic);
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

//<div className='map' id='mapCanvas'><iframe width="100%" height="100%" frameBorder="0" style={{border:0}} src={googleMapsURL} allowFullScreen></iframe></div>

//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.data.locatn[0]}/>


