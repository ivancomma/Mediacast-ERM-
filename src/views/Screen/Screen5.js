import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';

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
            ]

        };
    }

    onHorizontalTopChange = (event) => {
        this.setState({
            horizontalTopPanes: event.newState
        });
    }
    onHorizontalBottomChange =(event) => {
        this.setState({
            horizontalBottomPanes: event.newState
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
                    
                    <Splitter
                        // style={{ height: 830 }}
                        panes={this.state.horizontalTopPanes}
                        onChange={this.onHorizontalTopChange}
                    >
                        <h3>Left pane</h3>
                        <h3>Right pane</h3>
                    </Splitter>
                    <Splitter
                        // style={{ height: 830 }}
                        panes={this.state.horizontalBottomPanes}
                        onChange={this.onHorizontalBottomChange}
                    >
                        <h3>Left pane</h3>
                        <h3>Right pane</h3>
                    </Splitter>
                </Splitter>
            </div>
        );
    }
}

export default Screen5App;