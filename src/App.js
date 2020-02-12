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
  
  imageClick = (id) => {
    
    let answersArray = this.state.answers;
    
    if(answersArray.indexOf(id) === -1){
      answersArray.push(id);
      console.log(answersArray);
      this.setState({score: this.state.score +1})
      console.log(this.state.score)
      this.imageShuffle()
      } else {
      this.setState({
        score: 0,
        message: "Sorry, you lost",
        answersArray: [] 
      })
      if(this.state.score > this.state.topScore){
        this.setState({
          topScore: this.state.score
        });

      }
    }
    
  }



    

  render() {
    return (

      <div>
        <Navbar> score={this.state.score} || topScore={this.state.topScore} </Navbar>
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
                    imageClick={this.imageClick}
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
