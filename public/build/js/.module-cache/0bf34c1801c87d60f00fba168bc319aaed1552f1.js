var Project = React.createClass({displayName: "Project",
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
        if (this.data.locatns[0] !== undefined) {
            var locatnArray = new Array();
            var threeLocatns = new Array();
            var numbers = new Array();
            for(var i = 0; i < this.data.locatns.length; ++i) {
                for(var j = 0; j < 3; ++j) {
                    var locatnAndNum = {};
                    locatnAndNum.locatn = this.data.locatns[j];
                    locatnAndNum.number = i + 1;
                    threeLocatns.push(locatnAndNum);
                    ++i;
                }
                locatnArray.push(threeLocatns);
                threeLocatns = [];
            }

            console.log(locatnArray);
            return (
                React.createElement("div", {className: "frank"}, 
                React.createElement("div", {className: "projectInfo"}, 
                    locatnArray.map(function(locatnThree) {
                        return React.createElement(ProjectLocatnRow, {locatnThree: locatnThree})
                    })
                ), 
                React.createElement("div", {className: "projectInfo"}, 
                    locatnArray.map(function(locatnThree) {
                        return React.createElement(ProjectLocatnRow, {locatnThree: locatnThree})
                    })
                )
                )
            );
        } else {
            return (
                React.createElement("div", {className: "projectInfo"})
            );
        }


        
    },
    componentDidMount: function() {
        this.resizeProjectLocatns();
        $(window).on('resize', this.resizeProjectLocatns);
    },

    resizeProjectLocatns: function () {
        var height = $('.projectPicCont').width() / 1.5;
        $('.projectInfo .locatnPic').height(height);
    }
});

React.render(React.createElement(Project, null), document.getElementById('project'));
//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.props.locatn[0]}/>

//pass the three locations after breaking them up in the render function



