import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BooksGrid = (props) => {
  const {books, changeShelf} = props;

    return (

      <ol className="books-grid">

        {books.map((book) => (
          <Book
            key={book.title}
            book={book}
            changeShelf={changeShelf}/>
        ))}

      </ol>
    )
  }

export default BooksGrid
