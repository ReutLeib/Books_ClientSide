import React, {Component} from 'react'
import Idea from './Book'
import MdAdd from 'react-icons/lib/md/add'


class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
      ]
    }
    this.eachBook   = this.eachBook.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this)
    this.nextID     = this.nextID.bind(this)
  }

  add(txt1,txt2,txt3,txt4) {
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
          id: this.nextID(),
          reut: txt1,
          shiran: txt2,
          nitzan:txt4,
          matan:txt3
          
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
        (book) => (book.id !== i) ? book : {...book, reut: newBook}
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
            <h5 className="card-title">{book.reut}</h5>
            <p className="card-text">{book.shiran}</p>
            <p className="card-text">{book.nitzan}</p>
            <p className="card-text">{book.matan}</p>
          </Idea>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="bookList">
          {this.state.books.map(this.eachBook)}
          <button id="add" className="btn btn-primary" style={{marginTop:7+'px'}}>
             <MdAdd/></button>
        </div>
      )
  }
}
export default BookList
