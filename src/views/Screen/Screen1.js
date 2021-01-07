import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';
import VMenuApp from '../Menu/VMenu.js';
import './main.css';

class Screen1App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panes: [
                { size: '50%', collapsible: true },
                {}
            ],
            vmenuflag : false 
        };
        this.flag = 1;
        this.stateChange.bind(this);
    }

    onChange = (event) => {
        this.setState({
            panes: event.newState
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
                panes={this.state.panes}
                onChange={this.onChange}
            >
                <div className="screen1">
                    {this.state.vmenuflag && <VMenuApp/>}
                    <h3>Right</h3>
                    <p>Collapsible pane</p>
                </div>
                <div>
                    <h3>Left</h3>
                    <p>this is second part.</p>
                </div>

            </Splitter>

        );
    }
}

export default Screen1App;