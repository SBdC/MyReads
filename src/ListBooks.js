import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {

  static propTypes ={
    books:PropTypes.array.isRequired,
  }

  render() {

   const{books, changeShelf}=this.props;


   const shelves = [
      { title: "currently reading", value: "currentlyReading" },
      { title: "want to read", value: "wantToRead" },
      { title: "read", value: "read" }
   ]


    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>My Book Library</h1>
      </div>
      <div className="list-books-content" >
         {shelves.map((shelf) =>{
           return(
             <div className='bookshelf' key={shelf.value}>
              <h2 className='bookshelf-title'>{shelf.title}</h2>
              <div className="bookshelf-books"></div>
                <BooksGrid books={ books.filter((book)=>(book.shelf === shelf.value))} changeShelf={changeShelf}/>
             </div>
           )
          }
        )}
      </div>
      <div className='open-search'>
        <Link to='/search'>Search</Link>
      </div>
     </div>


   )
 }
}

export default ListBooks
