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
                experienceOpen: false,
                };

  this.aboutToggle = this.aboutToggle.bind(this);
  this.contactToggle = this.contactToggle.bind(this);
  this.projectsToggle = this.projectsToggle.bind(this);
  this.booksToggle = this.booksToggle.bind(this);
  this.experienceToggle = this.experienceToggle.bind(this);
  }

  aboutToggle(props) {
    if(this.state.aboutOpen === false){
    this.setState(state => ({
      aboutOpen: true,
      contactOpen: false,
      projectsOpen: false,
      booksOpen: false,
      experienceOpen: false,
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
        experienceOpen: false,
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
        experienceOpen: false,
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
        experienceOpen: false,
      }))} else{
        this.setState(state => ({
          booksOpen: true
        }))};
  }

  experienceToggle(props) {
    if(this.state.experienceOpen === false){
      this.setState(state => ({
        aboutOpen: false,
        contactOpen: false,
        projectsOpen: false,
        booksOpen: false,
        experienceOpen: true,
      }))} else{
        this.setState(state => ({
          experienceOpen: true
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
          <button className={ !this.state.experienceOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.experienceToggle}>Experience</button>
          <button className={ !this.state.contactOpen ? "Menu-box-closed" : "Menu-box-open"} onClick={this.contactToggle}>Contact Me</button>

          <br/><br/><br/>
          <div id="Content">
            <div className={ this.state.aboutOpen ? "Displayed": "NotDisplayed"}> 
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

            <div className={ this.state.projectsOpen ? "Displayed": "NotDisplayed"}>
              <h4>T-NATION CLI GEM</h4>
                GITHUB.COM/WJSCHULTZ/TNATION-CLI
                <ul>
                  <li>Designed a command line application using Ruby</li>
                  <li>Adhered to object oriented paradigm by creating multiple object models</li>
                  <li>Separated concerns to adhere to the singleresponsibility principle</li>
                  <li>Utilized Nokogiri to scrape dynamic information</li>
                </ul>

              <h4>REAL ESTATE MOGUL HUB</h4>
                GITHUB.COM/WJSCHULTZ/REM-HUB
                <ul>
                  <li>Applied Sinatra to create routes between the controllers and the views</li>
                  <li>Designed database schema and stored data using SQLite and ActiveRecord</li>
                  <li>Added validations and flash error messages to prevent invalid data from being saved</li>
                  <li>Leveraged Bcrypt to secure user passwords and authenticate logins</li>
                </ul>
      
            </div>

            <div className={ this.state.booksOpen ? "Displayed": "NotDisplayed"}>
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
                <li>The Fall of Carthage by Adrian Goldsworthy</li>
                <li>50 Battles that Changed the World by William Weir</li>
                <li>The End is Always Near by Dan Carlin</li>
                <li>The Nonexistent Knight by Italo Calvino</li>
                <li>How to be Better at (Almost) Everything by Pat Flynn</li>
                <li>Dao DeJing by Laozi </li>
               </ol>

            </div>

            <div className={ this.state.experienceOpen ? "Displayed": "NotDisplayed"}>
              <h3>Work Experience</h3>
              SMALL BUSINESS EXPERT [WIRELESS SOLUTIONS] | SPRINT | 2017 - PRESENT
                <ul>
                  <li>Spearheaded small business outreach in Thornton, Colorado market</li>
                  <li>Established communications expert for sales and technical support</li>
                  <li>Provided the total sales solution for all customers</li>
                  <li>Consistently surpassed monthly business sales quotas</li>
                  <li>Coached and trained peers to increase skills in sales</li>
                </ul>

              ASSISTANT MANAGER | AMERICAN LIBERTY GROUP | 2015-2017
              <ul>
                  <li>Excelled in one-call-close, cold-call sales</li>
                  <li>Provided ongoing training for new and experienced salespeople</li>
                  <li>Wrote new sales scripts and customized existing ones to maximize strengths</li>
              </ul>

              <br/>
              <h3>Educational Experience</h3>
              FULL-STACK WEB DEVELOPMENT [RUBY/REACT] | FLATIRON SCHOOL | 2019
              <br/><br/>
              BUSINESS ADMINISTRATION [MARKETING] | THOMAS EDISON STATE COLLEGE | 2014
              </div>
                      
            <div className={ this.state.contactOpen ? "Displayed": "NotDisplayed"}>
              <h5>LinkedIn</h5>
              <h5>Github</h5>
              <h5>Email</h5>
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
