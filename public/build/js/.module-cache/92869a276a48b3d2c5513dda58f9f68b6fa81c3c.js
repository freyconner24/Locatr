var Locatns = React.createClass({displayName: "Locatns",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn')
            .equalTo('user', Parse.User.current())
            .include('user')
            .ascending('createdAt'))
        };
    },
    render: function() {
       /* if (this.data.locatns[0] !== undefined) {
            React.render((<Locatn locatn={this.data.locatns[0]}/>), document.getElementById('locatn'));    
        }*/
        var r = (React.createElement(Locatn, null));
        return (
            React.createElement("div", {className: "sectionCont row"}, 
                React.createElement("div", {className: "profileTitle row"}, "LOCATNS"), 
                this.data.locatns.map(function(locatn, r) {
                    return React.createElement("div", {onClick: this.showLocatn.bind(this, r, locatn.id), key: locatn.id}, React.createElement(LocatnRow, {locatn: locatn}))
                }, this)
            )
        );
    },
    showLocatn: function(r, locatnId) {
        console.log(locatnId);
        var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(locatnId.objectId, {
            success: function(locatn) {
                console.log("Success");
                console.log(locatn.get("description"));
                //var t = React.createClass("Locatn", locatn);
                //t.render();

                //React.render((<Locatn locatn={locatn}/>), document.getElementById('locatn'));

            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});