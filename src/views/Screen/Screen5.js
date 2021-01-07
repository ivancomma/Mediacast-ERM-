import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';
import VMenuApp from '../Menu/VMenu.js';

import './main.css';

class Screen5App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verticalPanes: [
                { min: '20px' },
                { min: '20px' },
            ],
            horizontalTopPanes: [
                { min: '20px', size: '50%', collapsible: true },
                { min: '20px' },
            ],
            horizontalBottomPanes: [
                { min: '20px', size: '50%', collapsible: true },
                { min: '20px' },
            ],
            vmneuflag : false,
        };
        this.flag = 1;
        this.stateChange.bind(this);
    }

    onHorizontalTopChange = (event) => {
        this.setState({
            horizontalTopPanes: event.newState
        });
    }
    onHorizontalBottomChange = (event) => {
        this.setState({
            horizontalBottomPanes: event.newState
        });
    }

    onVerticalChange = (event) => {
        this.setState({
            verticalPanes: event.newState
        });
    }
    stateChange() {
        this.flag = 3;
        this.setState({
            vmenuflag:true
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.menu);
        if(this.flag ===1)
            {this.stateChange();
            return nextProps.order !== this.props.order}
        if(this.flag ===3) {this.flag = 1; return true;}

        return nextProps.order !== this.props.order
    }
    render() {
        return (

            <Splitter
                style={{ height: '100%', minWidth: '822px' }}
                panes={this.state.verticalPanes}
                orientation={'vertical'}
                onChange={this.onVerticalChange}
            >

                <Splitter
                    // style={{ height: 830 }}
                    panes={this.state.horizontalTopPanes}
                    onChange={this.onHorizontalTopChange}
                >
                    <div className="screen5">
                        {this.state.vmenuflag && <VMenuApp/>}
                        <h3>Top Left pane</h3>
                        
                    </div>
                    <h3>Top Right pane</h3>

                </Splitter>
                <Splitter
                    // style={{ height: 830 }}
                    panes={this.state.horizontalBottomPanes}
                    onChange={this.onHorizontalBottomChange}
                >
                    <h3>Bottom Left pane</h3>
                    <h3>Bottom Right pane</h3>
                </Splitter>
            </Splitter>

        );
    }
}

export default Screen5App;