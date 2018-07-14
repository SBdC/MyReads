import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

class ListBooks extends React.Component {

  static propTypes ={
    books:PropTypes.array.isRequired,
  }

  render() {

   const{books, changeShelf}=this.props;

   let shelves = [
      { title: "currently reading", type: "currentlyReading" },
      { title: "want to read", type: "wantToRead" },
      { title: "read", type: "read" }
   ]


    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>My Book Library</h1>
      </div>
      <div className="list-books-content" >
         {shelves.map((shelf, index) =>{
           return(
             <div className='bookshelf' key={index}>
              <h2 className='bookshelf-title'>{shelf.title}</h2>
               <div className="bookshelf-books"></div>
                   <BooksGrid books={ books.filter((book)=>(book.shelf === shelf.type))} changeShelf={changeShelf}/>
             </div>
           )
          }
        )}


      </div>

    </div>
   )
 }
}

export default ListBooks
