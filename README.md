# Blog Site 

## 
* Display different components depending on which RESTful endpoint


Redux Promise - used to handle asynchronous requests
Axios - used to make requests

### Creating New Posts
1. Scaffold 'PostsNew' component
2. Add route config
3. Add navigation between Index and New routes
4. Add form to PostsNew
5. Make action creator to save a post

#### Switch Component from React-Router 4.0.0 
* Normally, React Router 'fuzzy matches' route names, and renders all components that 
'fuzzy match' the URL address the user inputs. This is unlike the way Express or Rails
determine which views to render based on the URL. Enter the [Switch](https://reacttraining.com/react-router/web/api/Switch) component from React-Router. 
  * Switch renders only the first route in a list of routes that matches 
  * The React-Router docs recommend that all children of a <Switch> component be either <Route> or <Redirect> components.

#### Link Component from React-Router 4.0.0
* The Link Component is React-Router's way of providing UI navigation around an application. It takes a 'to' property, whose value should specify which route to load when the link is clicked. This is similar to the HTML href attribute on <a> tags. However, the <Link> component prevents the browser's default behaviour of sending a new HTTP request for a new HTML document. 

#### Redux Form Validation
* errors object
* values object

##### error property

##### Pristine State

##### Touched State

##### Invalid State


#### Redux Form Form Submission
* One of the props that is passed to your component when reduxForm is connected to a Component is the handleSubmit property. 
  * The handleSubmit property is made availble to perform all of the functions made available by reduxForm (validation, displaying errors to the user, etc.) while also taking a callback function as an argument, which will be performed if the form is valid. The submitted data is made available to the onSubmit function as a JSON object that is normally referred to as values

* The createPost action creator is created to handle the POST request

### Showing a Post