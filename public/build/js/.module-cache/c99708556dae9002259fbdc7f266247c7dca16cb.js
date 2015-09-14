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
        var GameScore = Parse.Object.extend("GameScore");
        var query = new Parse.Query(GameScore);
        query.get(locatnId, {
            success: function(gameScore) {
                // The object was retrieved successfully.
            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
            }
        });
    }
});