var ProfileApp = React.createClass({
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
    	console.log("ProjectApp.js: " + this.data.locatns);
        return (
            <div className='profileAppCont'>
                <Profile locatns={this.data.locatns}/>
                <Project locatns={this.data.locatns} />
                <Locatn locatn={this.data.locatns[0]} />
            </div>
        );
    }
});

React.render(<ProfileApp />, document.getElementById('profileApp'));
