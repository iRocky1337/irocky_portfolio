import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ApiData from './pages/ApiData';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Portfolio Test',
        headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Api', path: '/apidata' },
        { title: 'Instructions', path: '/instructions' },
      ],
      home: {
        title: 'Devil May Cry',
        subTitle: 'Let\'s Go All The Way To Hell',
        text: 'My portfolio project'
      },
      about: {
        title: 'Front-End Developer',
      },
      contact: {
        title: 'let\'s Talk',
      },
      api: {
        title: 'Api Data',
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
        
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Rocky 1337</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/apidata">ApiData</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
        <Route path="/api" render={() => <ApiData title={this.state.api.title} />} />
        
        <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
