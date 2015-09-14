var LocatnRow = React.createClass({
	render: function() {
	    var imageFile = this.props.locatn.picture;
      	var imageURL = imageFile.url();
	    
	    var divStyle = {
			backgroundImage: 'url(' + imageURL + ')'
		};
	    return (
	        <div className='locatnRow row'>
	            <div className='locatnPic' style={divStyle}></div>
	            <div className='locatnText'>
	                <div className='locatnTitle'>{this.props.locatn.title} &nbsp;<span className='editText' onClick={this.editLocatn}>edit</span></div>
	                <div className='locatnDesc'>{this.props.locatn.description}</div>
	            </div>
	            <div className='arrowButton'></div>
	            <ProfileTag locatnId={this.props.locatn.id.objectId}/>
	        </div>
    	);
 	},
 	editLocatn: function() {
 		var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(this.props.locatn.id.objectId, {
            success: function(locatn) {
                renderEditLocatnModal(locatn);
		        $("#editLocatnModal").fadeTo(400, 1, function() {
		            console.log("show edit locatn modal!");
		            var width = $('.editLocatnCont').width();
		            $('.editLocatnCont .locatnPic').width(width);
		            $('.editLocatnCont .locatnPic').height(width);
		            $('body').addClass('noScroll');
		            //$('.editLocatnCont .locatnPic').fadeTo(400, 1);
		            $("#locatn").hide(0);
        			$('.mapPicCont').fadeTo(0, 0);
		        });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});