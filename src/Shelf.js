import React from 'react'

class Shelf extends React.Component {

      state = {
        shelf: ''
      }

     componentDidMount(){
       this.setState({ shelf:this.props.book.shelf });
     }

     getOtherShelf(shelf){
        this.setState({shelf:shelf});
        this.props.changeShelf(this.props.book, shelf);

     }
      render() {

        return (

            <div className="book-shelf-changer">
                  <select onChange={(e)=>this.getOtherShelf(e.target.value)} value={this.state.shelf} >
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
          </div>

        )
    }
}

export default Shelf
