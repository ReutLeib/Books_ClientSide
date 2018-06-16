import React, {Component} from 'react'
import Idea from './Book'
import MdAdd from 'react-icons/lib/md/add'


class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.eachBook   = this.eachBook.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this);
    this.nextID     = this.nextID.bind(this);
    this.addBook    = this.addBook.bind(this);

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
  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

  update(newBook, i) {
    this.setState(() => ({
      books: this.state.books.map(
        (book) => (book.id !== i) ? book : {...book, name: newBook}
      )
    }))
  }    

  delete(id) {
  }

  componentDidMount() {      
    const url = "https://books-ranking.herokuapp.com/books";

    fetch(url).then((res) => {        
      return res.json();      
    }).then((data) => {        
      var self=this;        
      data.map((data) => {            
        console.log('books')            
        self.add(data.name, data.author.nationality, data.author.age, data.rank);        
      })      
    })  
  }

  eachBook (book,i) {
    return (          
      <div key={'container'+i}className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <Idea key={'book'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">{book.author}</p>
            <p className="card-text">{book.nationality}</p>
            <p className="card-text">{book.rank}</p>
          </Idea>
        </div>
      </div>
      )
  }

  addBook(){
    const rand = Math.floor(Math.random() * 100) + 1 ;

    this.setState(prevState => ({
      books: [
      ...prevState.books,{
        id:this.nextID(),
        name: "The story about Reut Leib",
        author: "pupa",
        nationality:rand,
        rank: 9
      }]
    }))
  }


  render() {
      return (
        <div className="bookList">
          {this.state.books.map(this.eachBook)}
          <button id="add" onClick={this.addBook} className="btn btn-primary" style={{marginTop:7+'px'}}>
             <MdAdd/></button>
        </div>
      )
  }
}
export default BookList
