var Locatn = React.createClass({displayName: "Locatn",
    render: function() {
        console.log(this.props.locatn);
        /*var imageFile = this.data.locatn[0].picture;
        var imageURL = imageFile.url();
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };*/
        return (
            React.createElement("div", {className: "locatnInfo"}, 
                React.createElement("div", {className: "row mapPicCont"}, 
                    React.createElement("div", {className: "col-sm-7 picCont"}, 
                        React.createElement("div", {className: "locatnPic"}, 
                            React.createElement("div", {className: "number"}, "1")
                        ), 
                        React.createElement("div", {className: "locatnText"}, 
                            React.createElement("div", {className: "locatnTitle"}, this.data.locatn.title, "  ", React.createElement("span", {className: "editText"}, "edit")), 
                            React.createElement("div", {className: "locatnDesc"}, this.data.locatn.description)
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-5 mapCont"}, 
                        React.createElement("div", {className: "map"}), 
                        React.createElement("div", {className: "tags"})
                    )
                )
            )
        );
    },
    componentDidMount: function() {
        this.resizePhotos();
        $(window).on('resize', this.resizePhotos);
    },

    resizePhotos: function () {
        var width = $('.mapCont').width();
        $('.map').height(width);
        $('.locatnInfo .locatnPic').height(width);

    }
});

//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.props.locatn[0]}/>


