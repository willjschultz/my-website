import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {aboutOpen: true,
                contactOpen: false,
                projectsOpen: false,
                booksOpen: false,
                resumeOpen: false,
                };

  this.aboutToggle = this.aboutToggle.bind(this);
  this.contactToggle = this.contactToggle.bind(this);
  this.projectsToggle = this.projectsToggle.bind(this);
  this.booksToggle = this.booksToggle.bind(this);
  this.resumeToggle = this.resumeToggle.bind(this);
  }

  aboutToggle(props) {
    if(this.state.aboutOpen === false){
    this.setState(state => ({
      aboutOpen: true,
      contactOpen: false,
      projectsOpen: false,
      booksOpen: false,
      resumeOpen: false,
    }))} else {
      this.setState(state => ({
        aboutOpen: true
      }))};
    }
  

  contactToggle(props) {
    if(this.state.contactOpen === false){
      this.setState(state => ({
        aboutOpen: false,
        contactOpen: true,
        projectsOpen: false,
        booksOpen: false,
        resumeOpen: false,
      }))} else{
        this.setState(state => ({
          contactsOpen: true
        }))};
  }

  projectsToggle(props) {
    if(this.state.projectsOpen === false){
      this.setState(state => ({
        aboutOpen: false,
        contactOpen: false,
        projectsOpen: true,
        booksOpen: false,
        resumeOpen: false,
      }))} else{
        this.setState(state => ({
          projectsOpen: true
        }))};
  }

  booksToggle(props) {
    if(this.state.booksOpen === false){
      this.setState(state => ({
        aboutOpen: false,
        contactOpen: false,
        projectsOpen: false,
        booksOpen: true,
        resumeOpen: false,
      }))} else{
        this.setState(state => ({
          booksOpen: true
        }))};
  }

  resumeToggle(props) {
    if(this.state.resumeOpen === false){
      this.setState(state => ({
        aboutOpen: false,
        contactOpen: false,
        projectsOpen: false,
        booksOpen: false,
        resumeOpen: true,
      }))} else{
        this.setState(state => ({
          resumeOpen: true
        }))};
  }



  render() {
   return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
          <h2 className="App-subtitle">Let's make something awesome </h2>
        </header>

        <body className="Body">
          <button className={ !this.state.aboutOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.aboutToggle}>About Me</button>
          <button className={ !this.state.projectsOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.projectsToggle}>Technical Projects</button>
          <button className={ !this.state.booksOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.booksToggle}>Books Read 2020</button>
          <button className={ !this.state.resumeOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.resumeToggle}>Resume</button>
          <button className={ !this.state.contactOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.contactToggle}>Contact Me</button>

          <br/><br/><br/>
          <div id="Content">
            <div className={ !this.state.aboutOpen ? "NotDisplayed" : "Displayed"}> 
              <p>
                My name is Will Schultz. I am a husband, father, space enthusiast, pizza enthusiast, and coding enthusiast.
              </p>
              <p> 
                A simple synopsis of my life's mission statement is "Make cool stuff".
              </p>
              <p>
                As a child I wanted to become an inventor, and eventually I found programming, which
                turned out to be a fantastic path to express myself and creating things I think are
                cool. I hope you'll think they're cool too.
              </p>
            </div>

            <div className={ !this.state.booksOpen ? "NotDisplayed" : "Displayed"}>
              <p>
                I've always enjoyed reading, however once I became a father and returned
                to a technical education, I found that my reading severely fell off.
                For the year 2020, I've made the commitment to both myself and others that I 
                will get through 52 books, averaging one a week. 
              </p>
              <p>
                Here's what I've done so far:
              </p>

              <ol>
                <li>Poo</li>
              </ol>

            </div>
          </div>
        </body>

        <footer>
          <p>Footer Stub</p>
          <p>Footer Stub</p>
          <p>Footer Stub</p>
        </footer>

      </div>
    );

  }
}

export default App;
