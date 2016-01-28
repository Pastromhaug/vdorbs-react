
import React from 'react';
import {Layout, Header, Textfield, Navigation, Drawer} from 'react-mdl';
import {LeftNav, AppBar} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
    _handleClick(e) {
        e.preventDefault();

        // Show/Hide the LeftMenu
        console.log("click");
        this.refs.leftNav.toggle();
    }

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <LeftNav
                    ref="leftNav"
                    docked={false}/>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this._handleClick}
                />
            </div>
        );
    }
}

export default App;

