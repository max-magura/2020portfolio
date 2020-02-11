import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Modal, ListGroup} from 'react-bootstrap';
import './card.css'

class CardPortfolio extends React.Component {  

  state = {
    showContactMe: false
  }

  handleShowContactMe  = event => {
    this.setState({showContactMe: true});
  };

  handleCloseContactMe = event => {
    this.setState({showContactMe: false});
  };

  render() {

    return (
    <>

    <Card className="card col-md-7">
      <Card.Body>
        <Card.Text as="h2">Hi, I'm <b>Max Magura</b></Card.Text>
        <Card.Text>
          I'm a junior web developer who is passionate about finding solutions through analytical creativity.
        </Card.Text>
        <a href="https://www.dropbox.com/s/zh6deotpdqsxljj/Max-Magura-Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer" download>
          <Button variant="outline-primary" className="topButtons col-md-4">
            Resume
          </Button>
        </a>
        <Button variant="outline-primary" className="topButtons col-md-4" onClick={this.handleShowContactMe}>Find Me</Button>
        <hr />
        <Card.Text as="h3">
          Projects
        </Card.Text>
        <a href="https://pedantic-swirles-516f15.netlify.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
          <h4>Raduno</h4>
         Raduno is a potluck management app that helps decrease the back and forth communication between hosts and guests and makes sure all parties are well informed. Utlizing: Node, Express, Sequelize, JavaScript / jQuery, MySQL, Session Storage, React, React Bootstrap, BCrypt, EmailJS, and MomentJS.
        </Button></a>
        <a href="https://thawing-journey-93545.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
          <h4>Lipin</h4>
          An application that simplifies ways to track your gift giving lists. Utlizing: Node, Express, Sequelize, JavaScript / jQuery, MySQL, Session Storage, Handlebars, Bulma, ChartJS.
        </Button></a>
        <a href="https://max-magura.github.io/Movie-Locator/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="projectButton col-md-12">
          <h4>Movie Locator</h4>
          An application that helps you find what service a distributed movie is located on and where you you can also find theaters near you. Utilizing: HTML, CSS, JavaScript / jQuery, Bootstrap, MomentJS, uTelly API, TMDB API.
        </Button></a>
        <a href="https://google-book-search-m1111.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="projectButton col-md-12">
          <h4>Google Book API Search</h4>
          An application that lets you search for books and save them. Utilizing: HTML, JavaScript, React, MongoDB, and the Google Books API.
        </Button></a> 
      </Card.Body>
    </Card>


    <Modal show={this.state.showContactMe} onHide={this.handleCloseContactMe} size="md">
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title>Find Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item className="modalList"><a href="mailto:maxnmagura@gmail.com" target="_blank" rel="noopener noreferrer">Email: maxnmagura@gmail.com</a></ListGroup.Item>
        <ListGroup.Item className="modalList"><a href="https://www.linkedin.com/in/maxmagura/" target="_blank" rel="noopener noreferrer">LinkedIn: linkedin.com/in/maxmagura</a></ListGroup.Item>
        <ListGroup.Item className="modalList"><a href="https://github.com/max-magura" target="_blank" rel="noopener noreferrer">GitHub: github.com/max-magura</a></ListGroup.Item>
      </Modal.Body>
    </Modal>

    </>
    )
  }
}

export default CardPortfolio