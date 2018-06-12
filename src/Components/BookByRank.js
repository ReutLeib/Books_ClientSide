import React, { Component } from 'react'
import Idea from './Book'
import BookRankList from './BookRankList'
import MdAdd from 'react-icons/lib/md/add'
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

  // eachRank (book,i) {         
  //     <div key={'container'+i}className="card" style={{width: 18 + 'rem'}}>
  //       <div className="card-body">
  //         <Idea key={'book'+i} index={i} onChange={this.update}>
  //           <h5 className="card-title">{book.name}</h5>
  //           <p className="card-text">{book.author}</p>
  //           <p className="card-text">{book.nationality}</p>
  //           <p className="card-text">{book.rank}</p>
  //         </Idea>
  //       </div>
  //     </div>
  // }

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
            // content.map(this.eachRank)
            console.log(content);
            
        })();
    }


    render() {
        return (

            <div>
                <form action="https://books-ranking.herokuapp.com/bookByRank/" method="POST" onSubmit={this.handleSubmit}>
                  <label>
                    <p> book rank parameter is number must be under, equal 10</p>
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
