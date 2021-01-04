import React, {useState} from 'react';
import $ from 'jquery';
import { Link, useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import './main.css';

import ExpandApp from './ExpandApp.js';
import Screen1App from '../Screen/Screen1.js';
import Screen2App from '../Screen/Screen4.js';
import Screen3App from '../Screen/Screen3.js';
import Screen4App from '../Screen/Screen2.js';
import Screen5App from '../Screen/Screen5.js';

import screen1img from '../../asset/image/screen1.jpg';
import screen2img from '../../asset/image/screen2.jpg';
import screen3img from '../../asset/image/screen3.jpg';
import screen4img from '../../asset/image/screen4.jpg';
import screen5img from '../../asset/image/screen5.jpg';
import hMenu from '../../asset/image/hlayout.png';
import vMenu from '../../asset/image/vlayout.png';


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
    if(param === 'first') {
        setVisible(1);
    }
    else if(param === 'second') {
        setVisible(2);
    }
    else if(param === 'third') {
      setVisible(3);
    }
    else if(param == 'fourth') {
      setVisible(4);
    }
    else if(param === 'fifth') {
      setVisible(5);
    }
  }
  return (
    <div style={{ height: "100%" }}>
      <div className={classes.root}>
        <div style={{display:'flex'}}>
        {/* <Button variant="contained" color="primary" onClick={() => handleClick('app')}>
        Lanuch
        </Button> */}
        <ButtonGroup>
          <ExpandApp/>
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
          <Button onClick={() => screenChange('first')}><img src={screen1img}></img></Button>
          <Button onClick={() => screenChange('second')}><img src={screen2img}></img></Button>
          <Button onClick={() => screenChange('third')}><img src={screen3img}></img></Button>
          <Button onClick={() => screenChange('fourth')}><img src={screen4img}></img></Button>
          <Button onClick={() => screenChange('fifth')}><img src={screen5img}></img></Button>
        </ButtonGroup>
        </div>
      </div>
      
      <Button className='Btn'>Menu</Button>
      <Button className='vbutton'><img src={vMenu}></img></Button>
      <Button className='hbutton'><img src={hMenu}></img></Button>
      <div className='workstation'>

        {visible === 1 && <Screen1App/>}
        {visible === 2 && <Screen2App/>}
        {visible === 3 && <Screen3App/>}
        {visible === 4 && <Screen4App/>}
        {visible === 5 && <Screen5App/>}
      </div>
    </div>
    
  );
}