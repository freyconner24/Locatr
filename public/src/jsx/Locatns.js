var Locatns = React.createClass({
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .ascending('createdAt'))
        };
    },
    render: function() {
       /* if (this.data.locatns[0] !== undefined) {
            React.render((<Locatn locatn={this.data.locatns[0]}/>), document.getElementById('locatn'));    
        }*/
        //var r = (<Locatn />);
        //console.log(this.data.locatns);
        return (
            <div className='sectionCont row'>
                <div className='profileTitle row'>LOCATNS</div>
                {this.data.locatns.map(function(locatn) {
                    return <div onClick={this.showLocatn.bind(this, locatn.id)} key={locatn.id} ><LocatnRow locatn={locatn} /></div>
                }, this)}
            </div>
        );
    },
    showLocatn: function(locatnId) {
        var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(locatnId.objectId, {
            success: function(locatn) {
                renderLocatn(locatn);
                $("#locatn").show(400, function() {
                    var width = $('.mapCont').width();
                    $('.map').height(width);
                    $('.locatnInfo .locatnPic').height(width);
                    $('.mapPicCont').fadeTo(400, 1);
                    $('body').addClass('noScroll');
                });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});