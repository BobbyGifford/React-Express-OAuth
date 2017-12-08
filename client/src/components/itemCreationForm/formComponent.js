import React from 'react'
import { Field, reduxForm } from 'redux-form'

let MessageForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
  
  <div>
      <Field name="message" component="input" type="text" required/>
  </div>

  <button className="btn green" type="submit"><i className="material-icons right">send</i>Post</button>
  
  </form>
}

MessageForm = reduxForm({
  form: 'message'
})(MessageForm)

export default MessageForm