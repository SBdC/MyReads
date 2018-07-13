import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksGrid extends React.Component {

  static propTypes = {

    books:PropTypes.array.isRequired,

  }


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
