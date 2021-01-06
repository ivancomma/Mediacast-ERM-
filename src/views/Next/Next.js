import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import BoxContentApp from '../Home/BoxContent.js';
import '../Home/ExpandTree.css';
class NextApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="pad10">
                    <button className="k-button height99">Apps</button>
                    <Window title={"App Store" } onClose={this.toggleDialog} initialHeight={300} initialWidth={300}>
                        <div style={{backgroundColor:'lightgrey',height:'100%', minWidth:'170px'}}>
                            <BoxContentApp data={"treebox"}/>
                        </div>
                        
                     
                    </Window>
                </div>
        );
    }
}
export default NextApp;