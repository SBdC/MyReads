import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import './App.css'




class BooksApp extends React.Component {
  state = {
    books: [],

  }



componentDidMount(){
  this.gatherBooks()
}


gatherBooks = () => {
  BooksAPI.getAll()
  .then(books => {
    this.setState({ books })
  })
}



changeShelf = (book, otherShelf) => {
 console.log(book, otherShelf)
  BooksAPI.update(book, otherShelf)
  .then((result) => {
    this.gatherBooks();

  })
}


  render() {

   const {books} = this.state


    return (
      <div className='app'>

      <Route exact path='/' render={() => (
        <ListBooks
          books={books}
          changeShelf={this.changeShelf}/>

      )}/>
      <Route exact path='/Search' render={(history) => (
        <SearchBook
          books={books}
          changeShelf={this.changeShelf}
        />

      )}/>

      </div>
    )

  }
}

export default BooksApp
