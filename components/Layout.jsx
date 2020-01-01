import NavBar from '../components/NavBar.jsx';
import HeadTag from '../components/HeadTag.jsx';
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: false
        }
    }
    toggleTheme = () => {
        this.setState({ darkTheme: !this.state.darkTheme });
    }
    render() {
        return (
            <div className={'theme ' + (this.state.darkTheme ? 'theme--dark' : 'theme--light')} id={this.props.id}>
                <div className="wrapper">
                    <HeadTag title={this.props.title} />
                    {this.props.children}
                    <NavBar nav={this.props.nav} enableThemeToggle={true} darkTheme={this.state.darkTheme} toggleOnClick={this.toggleTheme} />
                </div>
            </div>
        );
    }
}
export default Layout;