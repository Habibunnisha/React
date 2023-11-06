import React, { Component } from 'react'
import authorStore from './Stores/AuthorStore';
import AuthorActions from './Actions/AuthorActions'

export class AuthorPage extends Component {
 
    constructor(props) {
   super(props)
 
   this.getAuthor=this.getAuthors.bind(this);
   this.state={
    authors:authorStore.geAllAuthors()
   }
   
 }
 componentWillMount(){
    authorStore.on("change",this.getAuthor)
 }
 getAuthors(){
    this.setState({
        authors:authorStore.geAllAuthors()
    })
 }
 createAuthor(){
    AuthorActions.createAuthor(this.refs.aname.value);
 }
 
 
    render() {
        const authors=this.state.authors;
        var li=authors.map((author)=><li>{author.authorName}</li>)
    return (
      <div>
        <table border='3' cellSpacing={6} cellPadding={4}>
            <tr>
                <td>
                    <labe>enter auhtor name</labe>

                </td>
                <td>
                    <input type='text' ref='aname'></input>
                </td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <button onClick={this.createAuthor.bind(this)}>create author</button>
                </td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <h3>Author Details</h3>
                    <ul>
                        {li}
                    </ul>
                </td>
            </tr>
        </table>
      </div>
    )
  }
}

export default AuthorPage
