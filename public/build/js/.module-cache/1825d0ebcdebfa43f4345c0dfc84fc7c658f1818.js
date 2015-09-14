var Locatns = React.createClass({displayName: "Locatns",
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
        console.log(this.data.locatns);
        return (
            React.createElement("div", {className: "sectionCont row"}, 
                React.createElement("div", {className: "profileTitle row"}, "LOCATNS"), 
                this.data.locatns.map(function(locatn) {
                    return React.createElement("div", {onClick: this.showLocatn.bind(this, locatn.id), key: locatn.id}, React.createElement(LocatnRow, {locatn: locatn}))
                }, this)
            )
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
                });
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});