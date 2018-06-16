import React, { Component } from 'react'
import BookRankList from './BookRankList'
import ReactDOM from 'react-dom'

class BookByRankAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {newRank:0, newAuthor:0};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRankChange=this.handleRankChange.bind(this);
        this.handleAuthorRankChange=this.handleAuthorRankChange.bind(this);
    }

     handleRankChange(event){
        this.setState({newRank: event.target.value})
        console.log(`newRank: ${event.target.value}`)
     
     }

     handleAuthorRankChange(event){
        this.setState({newAuthor: event.target.value})
        console.log(`newAuthorRank: ${event.target.value}`)
     
     }

    handleSubmit(event){
        event.preventDefault();
        let newRank = this.state.newRank;
        let newAuthor = this.state.newAuthor;
        console.log("BOBO:" + newRank,newAuthor);
        (async () => {
          const rawResponse = await fetch('https://books-ranking.herokuapp.com/bookRankAuthor/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({rank:newRank,author_rank:newAuthor})
          });
            const content = await rawResponse.json();
            ReactDOM.render(<BookRankList books={content} />, document.getElementById("response"))
            console.log(content);
        })();
    }

    render() {
        return (
            <div>
                <form action="https://books-ranking.herokuapp.com/bookRankAuthor/" method="POST" onSubmit={this.handleSubmit}>
                    <label>
                        Rank:
                        <input onChange={this.handleRankChange} value={this.state.newRank} type="text" name="rank" />
                      </label>
                    <label>
                        Author:
                        <input onChange={this.handleAuthorRankChange} value={this.state.newAuthor} type="text" name="author_rank" />
                      </label>
                    <input type="submit" value="Send" />
                </form>
                <div id="response">
                </div>
            </div>
        )
    }
}
export default BookByRankAuthor