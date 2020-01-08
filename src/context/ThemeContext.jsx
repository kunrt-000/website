import React from 'react'

const defaultState = {
    dark: true,
    toggleDark: () => { },
}

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
    state = {
        dark: true
    }
    toggleDark = () => {
        this.setState({ dark: !this.state.dark });
        localStorage.setItem('dark', JSON.stringify(!this.state.dark));
    }
    componentDidMount() {
        const lsDark = JSON.parse(localStorage.getItem('dark'));
        if (lsDark !== undefined || lsDark !== null) this.setState({ dark: lsDark });
    }
    render() {
        const { children } = this.props;
        const { dark } = this.state;
        return (
            <ThemeContext.Provider value={{ dark, toggleDark: this.toggleDark }}>{children}</ThemeContext.Provider>
        );
    }
}

export default ThemeContext;
export { ThemeProvider };