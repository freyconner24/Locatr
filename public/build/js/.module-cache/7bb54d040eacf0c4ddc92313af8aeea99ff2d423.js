var Locatns = React.createClass({displayName: "Locatns",
    mixins: [ParseReact.Mixin],
    observe: function() {
        return {
            locatns: (new Parse.Query('Locatn'))
            
        };
    },
    render: function() {
        console.log(this.data);
        console.log(this.data[0]);
        console.log(this.data.locatns[0]);
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
