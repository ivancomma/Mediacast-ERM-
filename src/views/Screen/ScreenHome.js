import * as React from 'react'
import $ from 'jquery';
import { Splitter } from '@progress/kendo-react-layout';
import VMenuApp from '../Menu/VMenu.js';
import './main.css';

class ScreenHomeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            vmenuflag : false 
        }
        this.flag = 1;
        this.stateChange.bind(this);
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
            // panes={this.state.panes}
            // onChange={this.onChange}
            >
                <div className = 'homescreen'>
                    {this.state.vmenuflag && <VMenuApp/>}
                    <h3>Main screen</h3>
                    {/* <p>Collapsible pane</p> */}
                </div>
            </Splitter>
        );
    }
}

export default ScreenHomeApp;