import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import BoxTreeContentApp from './BoxTreeContent.js';
import { FlareSharp, FormatTextdirectionRToLRounded, TransferWithinAStationOutlined } from '@material-ui/icons';
// import './ExpandTree.css';
class ExpandTreeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            fake:true
        };
        this.flag = 0;
        this.toggleDialog = this.toggleDialog.bind(this);
        this.stateChange =  this.stateChange.bind(this);
    }

    toggleDialog() {
        this.setState({
            visible: !this.state.visible
        });

        this.flag = 1;

    }
    stateChange() {
        this.flag = 1;
        this.setState({
            visible:!this.state.visible
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should")
        
        if(this.flag === 1)  {this.flag = 3; return this.state.visible != nextState.value;}
        if(this.flag ===3) {this.stateChange(); return nextProps.order !== this.props.order}
        return nextProps.order !== this.props.order
    }

    render() {
        return (
            <div className="pad10">
                {/* <button className="k-button height99" onClick={this.toggleDialog}>Apps</button> */}
                {this.state.visible && <Window onClose={this.toggleDialog} title={"App" + this.props.data} initialHeight={300} initialWidth={300} initialTop={600} initialLeft={1300}>
                    <div style={{ height: '100%', minWidth: '170px' }}>
                        <BoxTreeContentApp data={"treebox"} />
                    </div>


                </Window>}

            </div>
        );
    }
}
export default ExpandTreeApp;
