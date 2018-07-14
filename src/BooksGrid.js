import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksGrid extends React.Component {

  static propTypes = {

    books:PropTypes.array.isRequired,

  }


  render() {

    const {books, changeShelf} = this.props;

    return (

    <ol className="books-grid">
      {books.map((book) => (
        <Book key={book.title} book={book} changeShelf={changeShelf}/>
      ))}

    </ol>

   )

  }

}

export default BooksGrid
