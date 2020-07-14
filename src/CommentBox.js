import React from 'react'

const CommentBox = ({heading}) => {
  return (
    <div>
      <label>{heading}</label>
      <textarea cols="30" rows="10" />
    </div>
  )
}

export default CommentBox