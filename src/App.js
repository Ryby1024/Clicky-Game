import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Heading from './components/Header/Heading';
import Card from "./components/HeroesCard/Card";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Col from "./components/Col/Col";
import Footer from "./components/Footer/Footer"
import heroes from "./heroes.json";


class App extends Component {
  state = {
    heroes,
    answers: [],
    score: 0,
    topScore: 0,
    message: "Click an image to get started"
  };

  

  imageShuffle = () => {
    this.setState({ heroes: this.state.heroes.sort(() => Math.random() - 0.5) });
  }
  componentDidMount() {
    this.imageShuffle();
  }
  
  imageClick = (id, name) => {
    this.imageShuffle();
    this.setState({score: this.state.score + 1})

    console.log(`this worked `)
    console.log(`you clicked on ${name}`)
    console.log(`${name} has an id of ${id}`)
  }

  


  

  render() {
    return (

      <div>
        <Navbar> The Marvel Universe. Your score is {this.state.score} || Top Score: {this.state.topScore} </Navbar>
          <Container>
            <Heading />
            <Row>

              {this.state.heroes.map(hero => (
                <Col size="sm" key={hero.id}>
                  <Card
                    id={hero.id}
                    key={hero.id}
                    name={hero.name}
                    image={hero.image}
                    onClick={() => this.imageClick}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Footer />
       </div>
        )
      }
    }
    
    
    
    
    
    export default App;
