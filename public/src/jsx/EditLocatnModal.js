var EditLocatnModal = React.createClass({
    render: function() {
        console.log("render edit locatn modal!");
        console.log(this.props.locatn);
        var title = "This Is A Title";
        var description = "This Is A Description";
        var imageFile = null;
        var imageURL = "/build/img/locatn.jpg";

        var divStyle = {
            backgroundImage: 'url(' + imageURL + ')'
        };

        var profileTag = null;

        if (this.props.locatn !== undefined) {
            title = this.props.locatn.get("title");
            description = this.props.locatn.get("description");
            imageFile = this.props.locatn.get("picture");
            imageURL = imageFile.url();
            divStyle.backgroundImage = 'url(' + imageURL + ')';
            profileTag = (<ProfileTag locatnId={this.props.locatn.id}/>);
        }
        return (
            <div className='editLocatnCont'>
                <div className='locatnPic' style={divStyle}>
                    <div id="editLocatnBackButton" className='backButton' onClick={this.closeEditLocatn}>back</div>
                    <div id="editLocatnDeleteButton" className='deleteButton' onClick={this.deleteLocatn}>delete</div>
                </div>
                <div className='locatnText'>
                    <input type='text' id='locatnTitleTextBox' className='editTextBox editTitleTextBox' />
                    <input type='text' id='locatnDescTextBox' className='editTextBox editDescTextBox' />
                    <input type='text' id='locatnTagTextBox' className='editTextBox editTagTextBox' placeholder='Add tags...' />
                    <div className='tagRow'>
                        {profileTag}
                    </div>
                </div>
                <br/>
                <div className='editModalButtons'>
                    <div id='cancelButton' onClick={this.closeEditLocatn}>cancel</div>
                    <div id='updateButton' onClick={this.updateLocatn}>update</div>
                </div>
                <div className='updatedMessage'>UPDATED</div>
            </div>
        );
    },
    componentDidMount: function() {
        $('#locatnTitleTextBox').val(this.props.locatn.get("title"));
        $('#locatnDescTextBox').val(this.props.locatn.get("description"));
    },
    closeEditLocatn: function() {
        $("#editLocatnModal").fadeTo(400, 0, function() {
            $('body').removeClass('noScroll');
            $("#editLocatnModal").hide(0);
        });
    },
    updateLocatn: function() {
        var title = $('#locatnTitleTextBox').val();
        var description = $('#locatnDescTextBox').val();

        var locatn = this.props.locatn;
        locatn.set("title", title);
        locatn.set("description", description);


        locatn.save(null, {
            success: function(locatn) {
                var tags = $('#locatnTagTextBox').val();
                if(tags !== "") {
                    tags = tags.toLowerCase();
                    var tags = tags.split(" ");
                    for(var i = 0; i < tags.length; ++i) {
                        console.log(tags[i]);
                        var Tag = Parse.Object.extend("Tag");
                        var tag = new Tag();
                        tag.set("text", tags[i]);
                        tag.set("locatn", locatn);
                        tag.save();
                    }
                }

                $('#locatnTitleTextBox').val(title);
                $('#locatnDescTextBox').val(description);
                $('.updatedMessage').show(400, function() {
                    setTimeout("$('.updatedMessage').hide(400);", 3000);
                });
                renderEditLocatnModal(locatn);
            },
            error: function(locatn, error) {
            }
        });
    },
    deleteLocatn: function() {
    var locatn = this.props.locatn
    locatn.destroy({
        success: function(locatn) {
            alert("success");
            this.closeEditLocatn();
        },
        error: function(locatn, error) {
            alert("error");
            // The delete failed.
            // error is a Parse.Error with an error code and message.
    }
});
    }
});

function renderEditLocatnModal(locatn) {
    React.render(<EditLocatnModal locatn={locatn}/>, document.getElementById('editLocatnModal'));
}
