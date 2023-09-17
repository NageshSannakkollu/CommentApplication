import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  name = event => {
    this.setState({name: event.target.value})
  }

  comment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    console.log(commentsList)
    return (
      <div className="app-container">
        <div className="inside-app-container">
          <h1>Comments</h1>
          <div className="form-image-container">
            <form className="form-container" onSubmit={this.onSubmitComment}>
              <p>Say something about 4.0 technologies</p>
              <input
                type="text"
                className="inputs"
                placeholder="Your Name"
                onChange={this.name}
                value={name}
              />
              <textarea
                type="textarea"
                className="inputs"
                rows="10"
                cols="30"
                placeholder="Your Comment"
                onChange={this.comment}
                value={comment}
              />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-pic"
              alt="comments"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="list-of-comments">
            <p className="length-of-comments">0</p>
            <p>comments</p>
          </div>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem commentDetails={eachComment} key={eachComment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
