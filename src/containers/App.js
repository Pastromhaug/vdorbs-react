
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <header id="header"
                    className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
                <div id="headerrow" className="mdl-layout__header-row">
                    <button id="backbutton" className="mdl-button mdl-js-button mdl-button--icon" data-upgraded=",MaterialButton" style={{display: 'none', marginRight: 24}} onclick="getGraph()">
                        <i className="material-icons">chevron_left</i>
                    </button>
                    <span id="home" className="mdl-layout-title">Home</span>
                    <div className="mdl-layout-spacer" />
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input" type="text" id="search" />
                            <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                        </div>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                        <i className="material-icons">more_vert</i>
                    </button>
                    <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                        <li className="mdl-menu__item">About</li>
                        <li className="mdl-menu__item">Contact</li>
                        <li className="mdl-menu__item">Legal information</li>
                    </ul>
                </div>  
            </header>
        );
    }
}

export default App;
