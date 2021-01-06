import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';

import './main.css';

class Screen4App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verticalPanes: [
                { min: '20px' },
                { min: '20px' },
            ],
            // horizontalPanes: [
            //     { min: '20px', size: '20%', collapsible: true },
            //     { min: '20px' },
            // ]
        };
    }

    onHorizontalChange = (event) => {
        this.setState({
            horizontalPanes: event.newState
        });
    }

    onVerticalChange = (event) => {
        this.setState({
            verticalPanes: event.newState
        });
    }

    render() {
        return (
            <div>
                
                <Splitter
                    style={{ height: 810 }}
                    panes={this.state.verticalPanes}
                    orientation={'vertical'}
                    onChange={this.onVerticalChange}
                >
                    <h3>Top pane</h3>
                    <h3>Bottom pane</h3>
                </Splitter>
            </div>
        );
    }
}
export default Screen4App;