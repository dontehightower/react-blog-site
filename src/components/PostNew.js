import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
  // field argument has to contain event handlers that will be connected to the JSX
  renderField(field) {
    const {meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <lable>{field.label}</lable>
        <input
        className='form-control'
        type='text'
        // field.input is an object that contains numerous event handlers and props
          {...field.input} // this line deconstructs the field.input object and makes all of its properties
          // available to the JSX component that it's specified within
        />
        <div className='text-help'>
          {touched ? error : ''} {/* this propery is automatically added to the field object from the value function */ }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    })
  }

  render(){
    const { handleSubmit } = this.props


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field 
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form> 
    );
  }
}

//values is an object that contains all the different values a user has entered into the form
function validate(values) {
  const errors = {};

  //Validate the inputs from the values object
  if(!values.title) { 
    errors.title = "Enter a title";
  }
  if(!values.categories) {
    errors.categories = 'Add categories to your post'
  }
  if(!values.content) {
    errors.content = 'Submitting an empty blog is not allowed'
  }
  // If errors is empty, redux-form assumes form is fine and submits
  // If errors has any properties, redux form assumes form is invalid and does not submit it
  //return the errors object
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostNew)
);