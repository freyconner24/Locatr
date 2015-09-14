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
                    return React.createElement(LocatnRow, {locatn: locatn, key: locatn.id})
                })
            )
        );
    }
});

Parse.initialize("GCJdrm8az1lcB3je08LYL5KPdA0oXa8D9PeXZ1As", "KBljyMk0thShw2NV6dxOhdido1nlZPOuFhqkUA4H");
