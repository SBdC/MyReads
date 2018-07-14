import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'



class BooksApp extends React.Component {
  state = {
    books: []

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }



componentDidMount(){
  this.showBooks()
}


showBooks = () => {
  BooksAPI.getAll()
  .then(books => this.setState({books:books}))
}



changeShelf = (book, otherShelf) => {
  console.log(book, otherShelf)
  BooksAPI.update(book, otherShelf)
  .then((result) => {
    this.showBooks();
  })
}


  render() {
    return (
      <div className='app'>
      <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
      </div>
    )
  }
}

export default BooksApp
