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
                    return React.createElement(LocatnRow, {onClick: this.showLocatn.bind(this, locatn.id), locatn: locatn, key: locatn.id})
                }, this)
            )
        );
    },
    showLocatn: function(locatnId) {
        console.log(locatnId);
        alert("hello");
    }
});