var ProjectLocatn = React.createClass({
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
            title = this.props.locatnAndNum.locatn.title;
            description = this.props.locatnAndNum.locatn.description;
            number = this.props.locatnAndNum.number;
            imageFile = this.props.locatnAndNum.locatn.picture;
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
        }
        
        return (
            <div className='col-sm-4 projectPicCont'>
                <div className='locatnPic' style={divStyle}>
                    <div className='number'>{number}</div>
                </div>
                <div className='locatnText'>
                    <div className='locatnTitle'>{title}</div>
                    <div className='locatnDesc'>{description}</div>
                </div>
            </div>
        );
    }
});


//








