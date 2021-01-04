import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';

import './main.css';

class Screen2App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verticalPanes: [
                { min: '20px' },
                { min: '20px' },
            ],
            horizontalPanes: [
                { min: '20px', size: '50%', collapsible: true },
                { min: '20px' },
            ]
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
                    style={{ height: 750 }}
                    panes={this.state.verticalPanes}
                    orientation={'vertical'}
                    onChange={this.onVerticalChange}
                >
                    <h3>Top pane</h3>
                    <Splitter
                        // style={{ height: 830 }}
                        panes={this.state.horizontalPanes}
                        onChange={this.onHorizontalChange}
                    >
                        <h3>Left pane</h3>
                        <h3>Right pane</h3>
                    </Splitter>
                </Splitter>
            </div>
        );
    }
}

export default Screen2App;