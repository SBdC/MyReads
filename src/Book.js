import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class Book extends React.Component {

  static propTypes = {
    book:PropTypes.object.isRequired,


  }


  render() {

    const {book, books, changeShelf} = this.props;

    return (

      <li className="book" key={book.title}>

        <div className='book-cover' style={{
            width: 128,
            height: 174,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}/>
            <Shelf book={book}  books={books} changeShelf={changeShelf}/>
        <div className='book-details'>
          <p className="book-title">{book.title}</p>
          {/* <p>{book.subtitle}</p> */}

          <p className="book-authors">{book.authors}</p>
        </div>



      </li>
   )

  }

}

export default Book
