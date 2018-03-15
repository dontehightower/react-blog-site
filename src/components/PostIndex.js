import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  // set the fetchPosts action to occur after the component mounts
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const posts = this.props.posts;

    return Object.keys(posts).map((id) => {
      const post = posts[id];
      return (
        <li className='list-group-item' key={id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return ( 
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

//Whenever something has to be consumed from application level state, use mapStateToProps
function mapStateToProps(state) {
  return { posts: state.posts };
}

// connect the fetchPosts action creator to the PostIndex component
export default connect(mapStateToProps, { fetchPosts })(PostIndex);