
import React from 'react';
import {Layout, Header, Textfield, Navigation, Drawer} from 'react-mdl';

class App extends React.Component {
    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader fixedDrawer>
                    <Header title="Title" style={{backgroundColor: 'rgb(245,245,245)', color: 'rgb(117,117,117)'}}>
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                    </Header>
                    <Drawer title="Title" style={{color: 'rgb(236,239,241)', backgroundColor: 'rgb(38,50,56)'}}>
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Drawer>
                </Layout>
            </div>
        );
    }
}

export default App;
