import React, {Component} from 'react'

class ListBooks extends Component {

  render() {
  console.log('Props', this.props)
    return (

      <div className="list-books">
      <div className="list-books-title">
        <h1>My Book Library</h1>
      </div>

      <ol className ="books-grid">
        {this.props.books.map((book) =>(

         <li  className="book" key={book.title}>
           <div className='book-cover' style={{ width: 128, height: 174, backgroundImage: 'url("${bookCover}")' }}/>
          <div className='book-details'>
            <p>{book.title}</p>
            <p>{book.subtitle}</p>
</div>
</li>


        ))}

             </ol>
    </div>)

  }
}

export default ListBooks
