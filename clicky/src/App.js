import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";
import "./App.css";
import CardWrapper from "./components/CardWrapper";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, score:0, clicked: []
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };
  checkClick = id => {

    console.log(`Clicked ${id}` );

    //Check to see if this ID is 
    const match = this.state.clicked.includes(id)
    console.log(match);

    if(match){
      this.resetGame();
    }
    else{
      this.addPoint();
      this.state.clicked.push(id);
    }
    
    this.randomizeItems();

    //Use this to check the clicked item and see if they have already clicked it in the past
  }

  resetGame = () => {
    this.setState({score: 0})
    this.setState({clicked: []});
  }

  addPoint = () => {
    const newScore = this.state.score + 1;
    this.setState({score: newScore})
  }

  randomizeItems = () => {

      var input = this.state.friends;
       
      for (var i = input.length-1; i >=0; i--) {
       
          var randomIndex = Math.floor(Math.random()*(i+1)); 
          var friendAtIndex = input[randomIndex]; 
           
          input[randomIndex] = input[i]; 
          input[i] = friendAtIndex;
      }
      this.setState({friends: input});
  
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>
          Clicky Game
        </Title>
        <Score>Score: {this.state.score}</Score>
        <CardWrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
