var Locatns = React.createClass({displayName: "Locatns",
    render: function() {
        return (
            React.createElement("div", {className: "sectionCont row"}, 
                React.createElement("div", {className: "profileTitle row"}, "LOCATNS"), 
                this.props.locatns.map(function(locatn) {
                    return React.createElement(LocatnRow, {locatn: locatn, key: locatn.id})
                })
            )
        );
    }
});
