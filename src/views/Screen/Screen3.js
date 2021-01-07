import * as React from 'react'
import { Splitter } from '@progress/kendo-react-layout';
import VMenuApp from '../Menu/VMenu.js';
import './main.css';

class Screen3App extends React.Component {
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
            ],
            vmenuflag : false,
        };
        this.flag = 1;
        this.stateChange.bind(this);
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
                    panes={this.state.horizontalPanes}
                    onChange={this.onHorizontalChange}
                >
                    
                    <div className="screen3">
                        {this.state.vmenuflag && <VMenuApp/>}
                        <h3>Top right</h3>
                        
                    </div>
                    <h3>bottom</h3>
                </Splitter>
                <h3>Bottom pane</h3>
            </Splitter>

        );
    }
}

export default Screen3App;