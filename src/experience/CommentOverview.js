import React, { Component } from "react";
import CommentForm from './From'
import CommentList from "./CommentList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './user-style.css'
class CommentOverview extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          comments: [],
          loading: false
        };
    
        this.addComment = this.addComment.bind(this);
      }
    
      componentDidMount() {
        // loading
        this.setState({ loading: true });
    
        // get all the comments
        fetch("http://localhost:3000")
          .then(res => res.json())
          .then(res => {
            this.setState({
              comments: res,
              loading: false
            });
          })
          .catch(err => {
            this.setState({ loading: false });
          });
      }
    
      /**
       * Add new comment
       * @param {Object} comment
       */
      addComment(comment) {
        this.setState({
          loading: false,
          comments: [comment, ...this.state.comments]
        });
      }
    
      render() {
        return (
          <div className="container">
            <header className="userBoard-title">
              <h1>
              Share your inspiring journey
              </h1>
            </header>
    
            <div className="row">
              <div className="col-4  pt-3 border-right">
                <h2></h2>
                <CommentForm addComment={this.addComment} />
              </div>
              <div className="col-8  pt-3 bg-white list-of-comment">
                <CommentList
                  loading={this.state.loading}
                  comments={this.state.comments}
                />
              </div>
            </div>
          </div>
        );
      }
}

export default CommentOverview;