import React, {useState} from 'react';
import $ from 'jquery';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import { Window } from '@progress/kendo-react-dialogs';
import './main.css';

import ExpandApp from './Expand.js';
import ExpandTreeApp from './ExpandTree.js';
import ScreenHomeApp from '../Screen/ScreenHome.js';
import Screen1App from '../Screen/Screen1.js';
import Screen2App from '../Screen/Screen2.js';
import Screen3App from '../Screen/Screen3.js';
import Screen4App from '../Screen/Screen4.js';
import Screen5App from '../Screen/Screen5.js';

import screen0img from '../../asset/image/screen0.jpg';
import screen1img from '../../asset/image/screen1.jpg';
import screen2img from '../../asset/image/screen2.jpg';
import screen3img from '../../asset/image/screen3.jpg';
import screen4img from '../../asset/image/screen4.jpg';
import screen5img from '../../asset/image/screen5.jpg';
import hMenu from '../../asset/image/hlayout.png';
import vMenu from '../../asset/image/vlayout.png';
import { SignalCellularConnectedNoInternet0Bar } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {  
      margin: theme.spacing(1),
    },
  },
}));

export default function Home() {
  const history = useHistory();
  const classes = useStyles();
  const [visible, setVisible] = useState(0);
  const [expand, setExpand] = useState();
  const [screen, setScreen] = useState(<ScreenHomeApp/>);
  let treeData = 0;
  function handleClick(param) {
    console.log("aaaaaaa");
    if (param === 'app') {
      history.push("/first");
    }
    if (param === 'screen') {
      history.push("/screen");
    }
  }
  function hoverChange(param) {
    console.log(param);
    if(param === 'auto') $(".but_screen_hover").removeClass("but_screen_hover");
    if(param === 'click') $("#but_screen_hover").toggleClass("but_screen_hover");
  }
  function screenChange(param) {
    $("#but_screen_hover").toggleClass("but_screen_hover");
    if(param === 'home') {
      setVisible(0);
      setScreen(<ScreenHomeApp/>)
    }
    if(param === 'first') {
        setVisible(1);
        setScreen(<Screen1App/>)
    }
    else if(param === 'second') {
        setVisible(2);
        setScreen(<Screen2App/>);
    }
    else if(param === 'third') {
      setVisible(3);
      setScreen(<Screen3App/>);
    }
    else if(param == 'fourth') {
      setVisible(4);
      setScreen(<Screen4App/>);
    }
    else if(param === 'fifth') {
      setVisible(5);
      setScreen(<Screen5App/>);
    }
  }
  function changeExpandWindow(key){
    treeData = key;
    setExpand(<ExpandTreeApp data={key}/>);
  }
  function vbuttonhandleClick() {
    if (visible === 0 ) {
      setScreen(<ScreenHomeApp menu ={0}/>);
    }
    else if(visible === 1) {
      console.log(222);
      setScreen(<Screen1App menu = {1}/>);
    }
    else if(visible === 2) {
      setScreen(<Screen2App menu = {2}/>);
    }
    else if(visible === 3 ) {
      setScreen(<Screen3App menu = {3}/>);
    }
    else if (visible === 4 ) {
      setScreen(<Screen4App menu = {4}/>);
    }
    else
      setScreen(<Screen5App menu = {5}/>);
  }
  function hbuttonhandleClick() {

  }
  return (
    <div style={{ height: "100%" }}>
      <div className={classes.root}>
        <div style={{display:'flex'}}>
        {/* <Button variant="contained" color="primary" onClick={() => handleClick('app')}>
        Lanuch
        </Button> */}
        <ButtonGroup>
          <ExpandApp changeExpandWindow={changeExpandWindow.bind(this)}/>
          
          {/* <ExpandTreeApp/> */}
          <Button variant="contained" color="secondary" 
            className='butsplit'
            onClick={() => hoverChange('click')} 
            onMouseEnter={()=> hoverChange('auto')}>
            Screen split
          </Button>
        </ButtonGroup>
        <ButtonGroup
          className="but_screen_hover"
          id="but_screen_hover"
          variant="contained" color="primary"
          aria-label="contained primary button group"
          onClick={() => hoverChange}>
          <Button onClick={() => screenChange('home')}><img src={screen0img}></img></Button>
          <Button onClick={() => screenChange('first')}><img src={screen1img}></img></Button>
          <Button onClick={() => screenChange('second')}><img src={screen2img}></img></Button>
          <Button onClick={() => screenChange('third')}><img src={screen3img}></img></Button>
          <Button onClick={() => screenChange('fourth')}><img src={screen4img}></img></Button>
          <Button onClick={() => screenChange('fifth')}><img src={screen5img}></img></Button>
        </ButtonGroup>
        {expand}
        </div>
      </div>
      <div style={{display:'flex',height:'100%',width:'100%'}}>
        <div style={{maxWidth:'56px'}}>
          <Button className='Btn'>Menu</Button>
          <Button className='vbutton' onClick={() => vbuttonhandleClick()}><img src={vMenu}></img></Button>
          <Button className='hbutton' onClick={() => hbuttonhandleClick()}><img src={hMenu}></img></Button>
        </div>
      
        <div className='workstation'>
           {screen}
        </div>
      </div>
    </div>
    
  );
}