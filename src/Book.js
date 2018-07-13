import React from 'react'

class Book extends React.Component {

  render() {

    const {book, books} = this.props;

    return (

      <li key={book.title}>

        <div className='book-cover' style={{
            width: 128,
            height: 174,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}/>
        <div className='book-details'>
          <p className="book-title">{book.title}</p>
          {/* <p>{book.subtitle}</p> */}

          <p className="book-authors">{book.authors}</p>
        </div>
        <select>
          <option value="move" disabled="disabled">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>

      </li>
   )

  }

}

export default Book
