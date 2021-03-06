var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        console.log(this.props.locatn);
        var title = "This Is A Title";
        var description = "This Is A Description";
        var imageFile = null;
        var imageURL = "/build/img/locatn.jpg";
        var longitude = -55.2708;
        var latitude = 25.2048;
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };

        var profileTag = null;

        if (this.props.locatn !== undefined) {
            title = this.props.locatn.get("title");
            description = this.props.locatn.get("description");
            longitude = this.props.locatn.get("geo").longitude;
            latitude = this.props.locatn.get("geo").latitude;
            imageFile = this.props.locatn.get("picture");
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
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
                            React.createElement("div", {className: "locatnTitle"}, title, "  ", React.createElement("span", {className: "editText", onClick: this.editLocatn}, "edit")), 
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
        var lat = this.props.locatn.get("geo").latitude;
        var lng = this.props.locatn.get("geo").longitude;
        this.initializeMap(lat, lng);
        $(window).on('resize', this.resizeLocatnPic);
    },
    componentDidUpdate: function(prevProps, prevState) {
        var lat = this.props.locatn.get("geo").latitude;
        var lng = this.props.locatn.get("geo").longitude;
        this.initializeMap(lat, lng);
    },
    resizeLocatnPic: function () {
        var width = $('.mapCont').width();
        $('.map').height(width);
        $('.locatnInfo .locatnPic').height(width);
    },
    closeLocatn: function() {
        $("#locatn").hide(400);
        $('.mapPicCont').fadeTo(400, 0);
    },
    editLocatn: function() {
        console.log("edit locatn clicked!");
        renderEditLocatnModal(this.props.locatn);
        $("#editLocatnModal").fadeTo(400, 1, function() {
            console.log("show edit locatn modal!");
            var width = $('.editLocatnCont').width();
            $('.editLocatnCont .locatnPic').width(width);
            $('.editLocatnCont .locatnPic').height(width);
            $().addClass('noScroll');
            //$('.editLocatnCont .locatnPic').fadeTo(400, 1);
        });
    },
    initializeMap: function(lat, lng) {
        var myLatlng = new google.maps.LatLng(lat,lng); // Add the coordinates
        var mapOptions = {
            zoom: 17, // The initial zoom level when your map loads (0-20)
            zoomControl:true, // Set to true if using zoomControlOptions below, or false to remove all zoom controls.
            zoomControlOptions: {
                style:google.maps.ZoomControlStyle.DEFAULT // Change to SMALL to force just the + and - buttons.
            },
            center: myLatlng, // Centre the Map to our coordinates variable
            mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
            scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
            // All of the below are set to true by default, so simply remove if set to true:
            panControl:false, // Set to false to disable
            mapTypeControl:true, // Disable Map/Satellite switch
            scaleControl:false, // Set to false to hide scale
            streetViewControl:false, // Set to disable to hide street view
            overviewMapControl:false, // Set to false to remove overview control
            rotateControl:false // Set to false to disable rotate control
        }
        var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions); // Render our map within the empty div
        
            
        var marker = new google.maps.Marker({ // Set the marker
            position: myLatlng, // Position marker to coordinates
            //icon:image, //use our image as the marker
            map: map, // assign the marker to our map variable
            title: 'This is your Locatn' // Marker ALT Text
        });
        
        google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker 
            //window.location='http://www.snowdonrailway.co.uk/shop_and_cafe.php'; // URL to Link Marker to (i.e Google Places Listing)
        });
        
        var infowindow = new google.maps.InfoWindow({ // Create a new InfoWindow
            content:"<h3 style='color: black;'>This is your Locatn</h3>" // HTML contents of the InfoWindow
        });
        google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
            infowindow.open(map,marker); // Open our InfoWindow
        });
        
        google.maps.event.addListenerOnce(map, 'idle', function() {
            google.maps.event.trigger(map, 'resize');
            //google.maps.event.addDomListener(window, 'resize', ); // Keeps the Pin Central when resizing the browser on responsive sites
            map.setCenter(myLatlng);
        });
    }
});

function renderLocatn(locatn) {
    React.render(React.createElement(Locatn, {locatn: locatn}), document.getElementById('locatn'));    
}


