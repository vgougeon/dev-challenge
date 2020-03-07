import React, { Component } from 'react';
import './layout.scss';

const Layout = () => {
    return (  
        <header>
        <span class="title">cmd.exe</span>
        <div id="title-bar-btns">
          <button id="min-btn"><span>&#xE921;</span></button>
          <button id="max-btn"><span>&#xE922;</span></button>
          <button id="close-btn"><span>&#xE8BB;</span></button>
        </div>
        </header>
    );
}
 
export default Layout;