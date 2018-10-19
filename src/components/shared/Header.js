import React from "react";
import logo from '../../logo.svg';
// import { BrowserRouter as Link } from "react-router-dom";


export default  class Header extends  React.Component {     
  render(){
    return(
      <>
       <header className="mdl-layout__header">
         <div className="mdl-layout__header-row">
           <span className="mdl-layout-title">  <img width="50" src={logo} className="App-logo" alt="logo" /></span>
           <div className="mdl-layout-spacer"></div>
           <nav className="mdl-navigation mdl-layout--large-screen-only">
               { this.props.children }
           </nav>
         </div>
       </header>
     </>
    )
  }
}

