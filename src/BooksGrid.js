import React from 'react'
import Book from './Book'

class BooksGrid extends React.Component {

  render() {

    const {books} = this.props;

    return (

    <ol className="books-grid">
      {books.map((book, index) => (
        <Book key={book.title} book={book}/>
      ))}

    </ol>

   )

  }

}

export default BooksGrid
