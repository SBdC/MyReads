import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'

library.add(faFrown, faBookOpen)


class SearchBook extends React.Component {


  static propTypes = {
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: [],

  }

  updateQuery = (query) => {
    this.setState({query, searchResults: []})
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults instanceof Array) {
          this.setState({
            searchResults: searchResults.map((book) => {
              let libraryBook = this.props.books.find((b) => (b.id === book.id));
              book.shelf = libraryBook ? libraryBook.shelf : 'none';
              return book;
             })
          })

        } else {
          this.setState({
            searchResults: []
          })
        }

      })
    }
  }


  render() {

    const { query, searchResults } = this.state
    const { changeShelf} = this.props

    return (
      <div>
          <div className="search-books">
            <form className="search-books-bar">
               {/* {JSON.stringify(this.state)} */}
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">

                <input type="text"
                       placeholder="Search Book"
                       value={query}
                       onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </form>


    { query.length >3 && searchResults.length === 0 ? (

            <div className="search-books-results">
              <p>No books found! </p>
              <FontAwesomeIcon icon="frown" />
            </div>


    ) : (


    <div className="search-books-results">

      <ol className="books-grid">
        {searchResults.map((book) => (
          <Book
            key={book.id}
            book={book}
            changeShelf={changeShelf}
            />
        ))}

      </ol>

    </div>

          )}

         </div>
    </div>

    )
  }
}

export default SearchBook
