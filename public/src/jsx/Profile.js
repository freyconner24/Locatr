var Profile = React.createClass({
    render: function() {
        return (
            <div className='profileCont'>
                <ProfileHeader />
                <Projects />
                <Locatns />
            </div>
        );
    }
});

React.render(<Profile />, document.getElementById('profile'));
