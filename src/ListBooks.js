import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faBookOpen)

class ListBooks extends React.Component {


  static propTypes ={
    books:PropTypes.array.isRequired,
  }



  render() {

   const{books, changeShelf}=this.props;


   const shelves = [
      { title: 'currently reading', value: 'currentlyReading', class: 'shelf-currentlyReading'},
      { title: 'want to read', value: 'wantToRead', class: 'shelf-wantToRead' },
      { title: 'read', value: 'read', class: 'shelf-read' }
   ]


    return (

      <div className='list-books'>
      <div className='list-books-title'>
      <FontAwesomeIcon  className='book-icon' icon='book' />  <h1>My Book Collection</h1> <FontAwesomeIcon  className='book-icon' icon='book-open' />
      </div>
      <div className='list-books-content' >
         {shelves.map((shelf) =>{
           return(
             <div className= {shelf.class} key={shelf.value}>
              <h2 className='bookshelf-title'>{shelf.title} </h2>
              <div className='bookshelf-books'></div>
                <BooksGrid  books={ books.filter((book)=>(book.shelf === shelf.value))} changeShelf={changeShelf}/>
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
