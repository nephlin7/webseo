import React from 'react'
import ReactDOM from 'react-dom';
import Animation from "../Animation";
import ScrollMagic, { Scene }   from "scrollmagic";
import { TweenMax, Elastic, Power2, Bounce,  Power1 } from "gsap";

export default class Card extends React.Component {

constructor( props ) {
  super( props );
  this.dom = {};


}

componentDidMount(cb) {
  this.dom.root = ReactDOM.findDOMNode(this);

  // BLURB STUFF
  this.controller = new ScrollMagic.Controller();
  this.blurbTween = TweenMax.staggerFromTo('.mdl-grid', 0.5,
      {
          y: 50,
          x: -50,
          opacity: 0
      },
      {
          y: 0,
          x: 0,
          opacity: 1
      },
      0.2
  );
  this.blurbScene = new Scene({
      triggerElement: '.mdl-grid',
      duration: 500,
      offset: -200
  })
  .addTo(this.controller);
  this.controller.addScene([
    this.blurbScene
]);
  Animation.show(this.dom.root , cb);
}

render() {
  return(
<>
<div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{ this.props.title }</h2>
              </div>
              <div className="mdl-card__supporting-text">
            { this.props.description }
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a href="#?" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  Get Started
                </a>
              </div>
              <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">share</i>
                </button>
              </div>
            </div>
</>
  )
}
}