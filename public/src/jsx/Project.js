var Project = React.createClass({
    mixins: [ParseReact.Mixin],
    observe: function() {
        var Project = Parse.Object.extend("Project");
        var project = new Project();
        project.id = this.props.project.id;

        return {
            locatns: (new Parse.Query('ProjectAndLocatn')
            .include('locatn')
            .equalTo('project', project)
            .ascending('createdAt'))
        };
    },
    render: function() {
        if (this.data.locatns[0] !== undefined) {
            console.log(this.data.locatns);
            var locatnArray = new Array();
            var threeLocatns = new Array();
            var numbers = new Array();
            for(var i = 0; i < this.data.locatns.length; ++i) {
                var locatnAndNum = {};
                locatnAndNum.locatn = this.data.locatns[i].locatn;
                locatnAndNum.number = i + 1;
                threeLocatns.push(locatnAndNum);
                if (i % 3 === 2 || i === this.data.locatns.length - 1) {
                    locatnArray.push(threeLocatns);
                    threeLocatns = [];    
                }
            }

            console.log(locatnArray);
            return (
                <div className='projectInfo'>
                    <div id="projectBackButton" className="backButton" onClick={this.closeProject}>back</div>
                    <div className="projectTitle">{this.props.project.get("title")} &nbsp;<span className='editText'>edit</span></div>
                    <div className="projectDesc">{this.props.project.get("description")}</div>
                    {locatnArray.map(function(locatnThree) {
                        return <ProjectLocatnRow locatnThree={locatnThree} />
                    })}
                </div>
            );
        } else {
            return (
                <div className='projectInfo'>
                    <div id="projectBackButton" className="backButton" onClick={this.closeProject}>back</div>
                    <div className="projectTitle">Project Title</div>
                    <div className="projectDesc">You have no locatns in this project</div>
                </div>
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
    },
    closeProject: function() {
        $("#project").hide(400);
        $('.locatnsRow').fadeTo(400, 0);
    }
});

function renderProject(project) {
    React.render(<Project project={project}/>, document.getElementById('project'));
}
//{this.data.locatn.title}
//{this.data.locatn.description}
//style={divStyle} //in locationPic
//<ProfileTag locatn={this.props.locatn[0]}/>

//pass the three locations after breaking them up in the render function



