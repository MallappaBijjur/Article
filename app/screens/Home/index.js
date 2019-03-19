import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  render() {
    return (
      <section className="container">
        <h1>What you want to doo?</h1>
        <button onClick={() => this.props.router.push("/create")} className="btn">
          Create Article
        </button>
        <button onClick={() => this.props.router.push("/list")} className="btn">List Articles</button>
      </section>
    );
  }
}


Home.propTypes = {
  router: PropTypes.object,
  vote: PropTypes.func
};


export default Home;