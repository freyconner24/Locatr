var ProjectLocatn = React.createClass({displayName: "ProjectLocatn",
    render: function() {
        var title = "This Is A Title";
        var description = "This Is A Description";
        var number = 1;
        var imageFile = null;
        var imageURL = "/build/img/locatn.jpg";
        
        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')',
            backgroundSize: 'cover'
        };

        var profileTag = null;


        if (this.props.locatnAndNum !== undefined) {
            title = this.props.locatnAndNum.locatn.get("title");
            description = this.props.locatnAndNum.locatn.get("description");
            number = this.props.locatnAndNum.number;
            imageFile = this.props.locatnAndNum.locatn.picture;
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
        }
        
        return (
            React.createElement("div", {className: "col-sm-4 projectPicCont"}, 
                React.createElement("div", {className: "locatnPic", style: divStyle}, 
                    React.createElement("div", {className: "number"}, number)
                ), 
                React.createElement("div", {className: "locatnText"}, 
                    React.createElement("div", {className: "locatnTitle"}, title), 
                    React.createElement("div", {className: "locatnDesc"}, description)
                )
            )
        );
    }
});


//








