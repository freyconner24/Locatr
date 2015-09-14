var ProjectRow = React.createClass({
    render: function() {
        return (
            <div className='locatnRow row'>
                <div className='locatnPic'></div>
                <div className='locatnText'>
                    <div className='locatnTitle'>{this.props.project.title} &nbsp;<span className='editText'>edit</span></div>
                    <div className='locatnDesc'>{this.props.project.description}</div>
                </div>
                <div className='arrowButton'></div>
            </div>
        );
    }
});