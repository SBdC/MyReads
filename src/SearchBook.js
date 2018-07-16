import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import {
  Link
} from 'react-router-dom'

class SearchBook extends React.Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults instanceof Array) {
          this.setState({
            searchResults
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

    const {
      query,
      searchResults
    } = this.state
    const {
      changeShelf
    } = this.props

    return (
      <div>
          <div className="search-books">
            <form className="search-books-bar">
              {/* {JSON.stringify(this.state)} */}
              <Link className="close-search" to="/">Close</Link>

              <div className="search-books-input-wrapper">

                <input type="text"
                       placeholder="Search by title or author"
                       value={query}
                       onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </form>
    { query.length !==0 && searchResults.length === 0 ? (

            <div className="search-books-results">
              <p>No books found!</p>
            </div>

    ) : (


    <div className="search-books-results">
      <ol className="books-grid">
        {searchResults.map((book) => (
          <Book
            key={book.id}
            book={book}
            changeShelf={changeShelf}/>
        ))}

      </ol>

    </div>

          )
        }
</div>

    </div>
    )

  }
}

export default SearchBook
