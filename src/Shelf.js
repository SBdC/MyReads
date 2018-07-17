import React from 'react'

class Shelf extends React.Component {

      state = {
        shelf: '',

      }

     componentDidMount(){
       this.setState({ shelf:this.props.book.shelf });
     }

     getOtherShelf(shelf){
        this.setState({shelf:shelf});
        this.props.changeShelf(this.props.book, shelf);
     }

      render() {

      const shelf = this.state

        return (

            <div className="book-shelf-changer">
                  <select onChange={(e)=>this.getOtherShelf(e.target.value)} value={shelf} >
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                  </select>
          </div>

        )
    }
}

export default Shelf
