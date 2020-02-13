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
    message: "Click a Hero to get started"
  };



  imageShuffle = () => {
    this.setState({ heroes: this.state.heroes.sort(() => Math.random() - 0.5) });
  }
  componentDidMount() {
    this.imageShuffle();
  }

  imageClick = (id, name, clicked) => {

    const heroImages = this.state.heroes
    console.log(id);
    console.log(name);

    console.log(clicked);

    console.log(heroImages);


    heroImages.forEach((hero) => {

      if (hero.id === id && hero.clicked) {
        heroImages.forEach((element) => {
          element.clicked = false 
        });   
        this.setState({
          message: "Sorry, you already clicked that hero. You Lose.", 
          score: 0});
      } else if (hero.id === id && !hero.clicked) {
          hero.clicked = true
          this.setState({
            message: "Good Job. You clicked a new Hero", 
            score: this.state.score + 1,
            topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
          });
      }
    })

    if (this.state.score +1 === heroImages.length) {
      alert("you won!")
      this.setState({
        message: "Play again!", 
        score: 0,
        topScore: 0});
    } 

    this.imageShuffle()    
    }

  




  render() {
    return (

      <Container>
        <Navbar> The Marvel Heroes- {this.state.message} score={this.state.score} || topScore={this.state.topScore} </Navbar>
        
          <Heading />
          <Row>

            {this.state.heroes.map(hero => (
              <Col size="sm" key={hero.id}>
                <Card
                  id={hero.id}
                  key={hero.id}
                  name={hero.name}
                  image={hero.image}
                  imageClick={this.imageClick}
                />
              </Col>
            ))}
          </Row>
        
        <Footer />
        </Container>
    )
  }
}





export default App;
