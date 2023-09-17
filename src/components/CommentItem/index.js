// Write your code here

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails
  console.log(name)
  const initialLetter = name.slice(0, 1)

  return (
    <li>
      <p>{initialLetter}</p>
      <p>{name}</p>
      <p>{comment}</p>
    </li>
  )
}

export default CommentItem
