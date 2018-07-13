import React from 'react'
import BooksGrid from './BooksGrid'

class ListBooks extends React.Component {

  render() {

   const{books}=this.props;


    console.log('Props', this.props)
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>My Book Library</h1>
      </div>
    <BooksGrid books={books} />
    </div>)

  }
}

export default ListBooks
