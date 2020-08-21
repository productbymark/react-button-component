import React from 'react';
import './App.scss';

import Button from './components/Button/Button';

function App() {

  const myEventHandler = (event) => {
    // event.currentTarget identifies the element on which the event occurred and which may be its descendant.
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
    console.log('From myEventHandler: ', event.currentTarget.className);
  }

  return (
    <div className="App">
      <h1>Reusable React Button Components</h1>

      <div className="row">
        <h2>Solid buttons</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary" 
            btnType="button" 
            btnEventHandler={myEventHandler}>
            Primary</Button>

          <Button 
            btnClass="btn btn--secondary" 
            btnType="button" 
            btnEventHandler={myEventHandler}>
            Secondary</Button>

          <Button 
            btnClass="btn btn--success" 
            btnType="button">
            Success</Button>
          
          <Button 
            btnClass="btn btn--danger" 
            btnType="button">
            Danger</Button>
            
          <Button 
            btnClass="btn btn--warning" 
            btnType="button">
            Warning</Button>

          <Button 
            btnClass="btn btn--info" 
            btnType="button">
            Info</Button>
          
          <Button 
            btnClass="btn btn--light" 
            btnType="button">
            Light</Button>
          
          <Button 
            btnClass="btn btn--dark" 
            btnType="button">
            Dark</Button>
          
          <Button 
            btnClass="btn btn--link" 
            btnType="button">
            Text Button</Button>
        </div>

      </div>


      <div className="row">
        <h2>Outline buttons</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button btnClass="btn btn--outline-primary" btnType="button">
            Primary</Button>

          <Button btnClass="btn btn--outline-secondary" btnType="button">
            Secondary</Button>

          <Button btnClass="btn btn--outline-success" btnType="button">
            Success</Button>
          
          <Button btnClass="btn btn--outline-danger" btnType="button">
            Danger</Button>
            
          <Button btnClass="btn btn--outline-warning" btnType="button">
            Warning</Button>

          <Button btnClass="btn btn--outline-info" btnType="button">
            Info</Button>
          
          <Button btnClass="btn btn--outline-light" btnType="button">
            Light</Button>
          
          <Button btnClass="btn btn--outline-dark" btnType="button">
            Dark</Button>

        </div>

      </div>


      <div className="row">
        <h2>Square buttons</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--radius-square" 
            btnType="button" 
            btnEventHandler={myEventHandler}>
            Primary</Button>

          <Button 
            btnClass="btn btn--secondary btn--radius-square" 
            btnType="button" 
            btnEventHandler={myEventHandler}>
            Secondary</Button>

          <Button 
            btnClass="btn btn--success btn--radius-square" 
            btnType="button">
            Success</Button>
          
          <Button 
            btnClass="btn btn--danger btn--radius-square" 
            btnType="button">
            Danger</Button>
            
          <Button 
            btnClass="btn btn--warning btn--radius-square" 
            btnType="button">
            Warning</Button>

          <Button 
            btnClass="btn btn--info btn--radius-square" 
            btnType="button">
            Info</Button>
          
          <Button 
            btnClass="btn btn--light btn--radius-square" 
            btnType="button">
            Light</Button>
          
          <Button 
            btnClass="btn btn--dark btn--radius-square" 
            btnType="button">
            Dark</Button>
          
          <Button 
            btnClass="btn btn--link" 
            btnType="button">
            Text Button</Button>

        </div>

        <div className="sample-buttons">
          <Button btnClass="btn btn--outline-primary btn--radius-square" btnType="button">
            Primary</Button>

          <Button btnClass="btn btn--outline-secondary btn--radius-square" btnType="button">
            Secondary</Button>

          <Button btnClass="btn btn--outline-success btn--radius-square" btnType="button">
            Success</Button>
          
          <Button btnClass="btn btn--outline-danger btn--radius-square" btnType="button">
            Danger</Button>
            
          <Button btnClass="btn btn--outline-warning btn--radius-square" btnType="button">
            Warning</Button>

          <Button btnClass="btn btn--outline-info btn--radius-square" btnType="button">
            Info</Button>
          
          <Button btnClass="btn btn--outline-light btn--radius-square" btnType="button">
            Light</Button>
          
          <Button btnClass="btn btn--outline-dark btn--radius-square" btnType="button">
            Dark</Button>

        </div>

      </div>


      <div className="row">
        <h2>Rounded buttons</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--radius-round" 
            btnType="button" 
            btnEventHandler={myEventHandler}>
            Primary</Button>

          <Button 
            btnClass="btn btn--secondary btn--radius-round" 
            btnType="button" 
            btnEventHandler={myEventHandler}>
            Secondary</Button>

          <Button 
            btnClass="btn btn--success btn--radius-round" 
            btnType="button">
            Success</Button>
          
          <Button 
            btnClass="btn btn--danger btn--radius-round" 
            btnType="button">
            Danger</Button>
            
          <Button 
            btnClass="btn btn--warning btn--radius-round" 
            btnType="button">
            Warning</Button>

          <Button 
            btnClass="btn btn--info btn--radius-round" 
            btnType="button">
            Info</Button>
          
          <Button 
            btnClass="btn btn--light btn--radius-round" 
            btnType="button">
            Light</Button>
          
          <Button 
            btnClass="btn btn--dark btn--radius-round" 
            btnType="button">
            Dark</Button>
          
          <Button 
            btnClass="btn btn--link" 
            btnType="button">
            Text Button</Button>

        </div>

        <div className="sample-buttons">
          <Button btnClass="btn btn--outline-primary btn--radius-round" btnType="button">
            Primary</Button>

          <Button btnClass="btn btn--outline-secondary btn--radius-round" btnType="button">
            Secondary</Button>

          <Button btnClass="btn btn--outline-success btn--radius-round" btnType="button">
            Success</Button>
          
          <Button btnClass="btn btn--outline-danger btn--radius-round" btnType="button">
            Danger</Button>
            
          <Button btnClass="btn btn--outline-warning btn--radius-round" btnType="button">
            Warning</Button>

          <Button btnClass="btn btn--outline-info btn--radius-round" btnType="button">
            Info</Button>
          
          <Button btnClass="btn btn--outline-light btn--radius-round" btnType="button">
            Light</Button>
          
          <Button btnClass="btn btn--outline-dark btn--radius-round" btnType="button">
            Dark</Button>

        </div>

      </div>
      
      
      <div className="row">
        <h2>Button sizing</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--sm" 
            btnType="button">
            Small Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary" 
            btnType="button">
            Normal Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--lg" 
            btnType="button">
            Large Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--block" 
            btnType="button">
            Block Button</Button>

        </div>

        <div className="sample-buttons">
          <Button btnClass="btn" btnType="button">
            Default</Button>

        </div>

      </div>

      <div className="row">
        <h2>Disabled buttons</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary" 
            btnType="button"
            btnDisabled="true">
            Disabled</Button>

          <Button 
            btnClass="btn btn--outline-primary" 
            btnType="button"
            btnDisabled="true">
            Disabled</Button>
            
        </div>

      </div>


      <div className="row">
        <h2>Button icons</h2>

        <p>Black jack barque Brethren of the Coast interloper warp crow's nest spike matey. Davy Jones' Locker jury mast gangplank yo-ho-ho gunwalls to go on account belay bucko. Coffer long clothes draught belaying pin matey belay Barbary Coast boom. Clipper warp gangway stern black spot lee loaded to the gunwalls nipper.</p>

        <p>Pressgang chase guns ho six pounders coxswain pillage Spanish Main list. List scuttle lugsail grog blossom gangplank Sail ho careen scurvy. Schooner topsail blow the man down ballast sheet Pirate Round code of conduct jib. Scuttle fore swing the lead execution dock Chain Shot come about ballast spyglass.</p>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--sm" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="left">
            Small Button</Button>

          <Button 
            btnClass="btn btn--primary btn--sm" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="center">
            Small Button</Button>

          <Button 
            btnClass="btn btn--primary btn--sm" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="right">
            Small Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="left">
            Normal Button</Button>

            <Button 
            btnClass="btn btn--primary" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="center">
            Normal Button</Button>
          
          <Button 
            btnClass="btn btn--primary" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="right">
            Normal Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--lg" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="left">
            Large Button</Button>

            <Button 
            btnClass="btn btn--primary btn--lg" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="center">
            Large Button</Button>
          
          <Button 
            btnClass="btn btn--primary btn--lg" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="right">
            Large Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--block" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="left">
            Block Button</Button>

        </div>

        <div className="sample-buttons">
          <Button 
            btnClass="btn btn--primary btn--block" 
            btnType="button"
            iconName="add_circle_outline" 
            iconPosition="right">
            Block Button</Button>

        </div>

      </div>
      
    </div>
  );
}

export default App;
