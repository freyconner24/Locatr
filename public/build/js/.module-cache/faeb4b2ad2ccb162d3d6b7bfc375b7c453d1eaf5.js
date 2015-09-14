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
                this.data.locatns.map(function(locatn, i) {
                    return React.createElement(LocatnRow, {onClick: this.showLocatn.bind(this, i), locatn: locatn, key: i})
                }, this)
            )
        );
    },
    showLocatn: function(i) {
        console.log(i);
    }
});