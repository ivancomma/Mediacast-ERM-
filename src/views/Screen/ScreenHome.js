import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';
import './main.css';

class ScreenHomeApp extends React.Component {
    constructor(props) {
        super(props);

    //     this.state = {
    //         panes: [
    //             { size: '50%', collapsible: true },
    //             {}
    //         ],
    //     };
    // }

    // onChange = (event) => {
    //     this.setState({
    //         panes: event.newState
    //     });
    }
    render() {
        return (
            <div>
                <Splitter
                    style={{ height: '810px' }}
                    // panes={this.state.panes}
                    // onChange={this.onChange}
                >
                    <div>
                        <h3>Sidebar content</h3>
                        <p>Collapsible pane</p>
                    </div>
                    {/* <div>
                        <h3>Main content</h3>
                        <p>this is second part.</p>
                    </div> */}
                    
                </Splitter>
            </div>
        );
    }
}

export default ScreenHomeApp;