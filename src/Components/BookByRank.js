import React, { Component } from 'react'
import BookRankList from './BookRankList'
import ReactDOM from 'react-dom'


class BookByRank extends Component {
    constructor(props) {
        super(props)
        this.state = {newRank:0}

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRankChange=this.handleRankChange.bind(this);
    }

  add(txt1,txt2,txt3,txt4) {
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
          id: this.nextID(),
          name: txt1,
          author: txt2,
          nationality:txt4,
          rank:txt3
          
      }]
    }))
  }

  handleRankChange(event){
    this.setState({newRank: event.target.value})
  }

    handleSubmit(event){
        event.preventDefault();
        let newRank = this.state.newRank;
        (async () => {
          const rawResponse = await fetch('https://books-ranking.herokuapp.com/bookByRank/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({rank:newRank})
          });
            const content = await rawResponse.json();
            ReactDOM.render(<BookRankList books={content} />, document.getElementById("response"))
        })();
    }


    render() {
        return (

            <div>
                <form action="https://books-ranking.herokuapp.com/bookByRank/" method="POST" onSubmit={this.handleSubmit}>
                  <label>
                    <p> book rank parameter is number must be under, equal 10</p>
                    (Enter 8 \ 9) <br></br>
                    Rank:
                    <input onChange={this.handleRankChange} value={this.state.newRank} type="text" name="rank" />                  
                  </label>
                  <input type="submit" value="Send" />
                </form>
                <div id="response">
                </div>
            </div>
        )
    }
}
export default BookByRank
