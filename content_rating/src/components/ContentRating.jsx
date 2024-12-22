
import React, { Component } from 'react';
import './ContentRating.css';
import logo from '../logo.svg'
import '../App.css';


class ContentRating extends Component {
  constructor() {
    super();
    this.state={
       likes:0,
       dislikes:0,
       totalRatings: 0,
       handleLike: () => {

        this.setState((prevState) => ({
            likes: prevState.likes + 1,
            totalRatings: prevState.totalRatings+1
          }));
       },
       handleDislike:() => {

        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1,
            totalRatings: prevState.totalRatings+1
          }));
       }

    };
  }

  render() {
    return (
     <>
     <div className='content-rating'>
      <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
              <h1>Welcome to React!</h1>
      </header>
     <h1>Text Content Rating</h1>
        <p>
        the main objective of this app is to practice with react.js components.
        This React component called 'ContentRating'
        where the component will let users rate material by clicking
        'like' or 'dislike' buttons. When the component is rendered for
        the first time, both the like and dislike counts are set to zero.
        I created a method that changes the state to add one to the number of
        likes when a user selects the 'like' button. In the same way, 
        clicking the 'dislike' button, the method will add one to the number of
        dislikes. This action lets users rate the content in an interactive way
        and provides useful input to content creators.
        </p>
        <div className='rating-buttons'>

            <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>

        </div>
        <p>Total Ratings: {this.state.totalRatings}</p>
     </div>
     </>
    );
  }
}

export default ContentRating;
