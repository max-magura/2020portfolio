import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Modal, ListGroup, Row, Col} from 'react-bootstrap';
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
    <Row className="justify-content-md-center">
      
    <Card className="card col-md-6
    ">
      <Card.Body>
        <Card.Text as="h1">Hi, I'm <b>Max Magura</b></Card.Text>
        <Card.Text>
          <p>I'm a junior web developer who is passionate about finding solutions through analytical creativity.</p>
          <p>
           Dynamic, motivated, and dependable professional with a background in marketing and demonstrated strengths in adaptability, problem-solving, communication, and teamwork. Passionate about excellence and determined to find solutions to any and all problems.</p>
          <hr></hr>
          <p>Technical skills include: <br></br>
          HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.Js, MySQL, MongoDB, Express, and ReactJS</p>
        </Card.Text>

              <a href="https://www.dropbox.com/s/zh6deotpdqsxljj/Max-Magura-Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer" download>
              <Button variant="outline-primary" className="topButtons col-md-5">
                Resume
              </Button>
              </a>

              <Button variant="outline-primary" className="topButtons col-md-5" onClick={this.handleShowContactMe}>Email | LinkedIn | Github
              </Button>
      
        <hr />
        <Card.Text>
          <h2>Projects </h2>
        </Card.Text>

        <Row>
          <Col xs={5}>
            <img src="/images/potluck.jpg" alt="" className="projectPicture"></img>
            <a href="https://pedantic-swirles-516f15.netlify.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
              <h5>Site</h5>
            </Button></a>
            <a href="https://github.com/max-magura/raduno" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
            <h5>Github</h5>
            </Button></a>
          </Col>
          <Col xs={7}>
            <h3>Raduno</h3>
            <br></br>
            <p>
              Raduno is a potluck management app that helps decrease the back and forth communication between hosts and guests and makes sure all parties are well informed. 
            </p>
            <p>
              Utlizing: Node, Express, Sequelize, JavaScript / jQuery, MySQL, Session Storage, React, React Bootstrap, BCrypt, EmailJS, and MomentJS.
            </p>
          </Col>
        </Row>
        <hr className="shortHR"></hr>
        <Row>
          <Col xs={7}>
            <h3>Lipin</h3>
            <br></br>
            <p>
              An application that simplifies ways to track your gift giving lists. Initial idea started as a holiday list for indoviduals, but could be used for shopping in general as well.
            </p>
            <p>
              Utlizing: Node, Express, Sequelize, JavaScript / jQuery, MySQL, Session Storage, Handlebars, Bulma, ChartJS.
            </p>
          </Col>
          <Col xs={5}>
            <img src="/images/list.jpg" alt="" className="projectPicture"></img>
            <a href="https://lipin-1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
              <h5>Site</h5>
            </Button></a>
            <a href="https://github.com/max-magura/Lipin" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
            <h5>Github</h5>
            </Button></a>
          </Col>
        </Row>
        <hr className="shortHR"></hr>
        <Row>
        <Col xs={5}>
            <img src="/images/movie.jpg" alt="" className="projectPicture"></img>
            <a href="https://max-magura.github.io/Movie-Locator/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
              <h5>Site</h5>
            </Button></a>
            <a href="https://github.com/max-magura/Movie-Locator" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
            <h5>Github</h5>
            </Button></a>
          </Col>
          <Col xs={7}>
            <h3>Movie Locator</h3>
            <br></br>
            <p>
            An application that helps you find what online service a distributed movie is located on (ie Netflix, Amazon Prime) and where you you can also find theaters near you. 
            </p>
            <p>
              Utilizing: HTML, CSS, JavaScript / jQuery, Bootstrap, MomentJS, uTelly API, TMDB API.
            </p>
          </Col>
        </Row>
        <hr className="shortHR"></hr>
        <Row>
          <Col xs={7}>
            <h3>Google Book API Search</h3>
            <br></br>
            <p>
              An application that lets you search for books using the Google Book API and save them.
            </p>
            <p>
              Utilizing: HTML, JavaScript, React, MongoDB, and the Google Books API.
            </p>
          </Col>
          <Col xs={5}>
            <img src="/images/books.jpg" alt="" className="projectPicture"></img>
            <a href="https://google-book-search-m1111.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
              <h5>Site</h5>
            </Button></a>
            <a href="https://github.com/max-magura/googlebooks" target="_blank" rel="noopener noreferrer"><Button variant="outline-primary" className="btn projectButton col-md-12">
            <h5>Github</h5>
            </Button></a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </Row>

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