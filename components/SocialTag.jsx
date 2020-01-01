class Social extends React.Component {
    constructor(props) {
        super(props);
    }

    openLink = () => {
        window.open(this.props.href, '_blank');
    }

    render() {
        return (
            <div className="social" onClick={this.openLink}>
                <div className="icon">{this.props.icon}</div>
                <div className="name">{this.props.name}</div>
            </div>
        )
    }
}


export default Social;