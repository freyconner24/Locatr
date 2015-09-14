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
        console.log(locatnId);
        var Locatn = Parse.Object.extend("Locatn");
        var query = new Parse.Query(Locatn);
        query.get(locatnId.objectId, {
            success: function(locatn) {
                console.log("Success");
                console.log(React);
                var reactElement = React.createElement("Locatn", locatn);
                React.render(React.createElement(Locatn, {locatn: locatn}), document.getElementById('locatn'));
            },
            error: function(object, error) {
                console.log("Error");
                
            }
        });
    }
});