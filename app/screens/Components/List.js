import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends Component {
  handleVote(id) {
    // We can call REST API here.
    // Since no endpoint detials availbale i am just dispatching action to store in Redux
    this.props.vote(id)
  }

  render() {
    const { article } = this.props;
    return (
      <section className="container">
        <h1>List</h1>
        <div className="container-fluid">
          <ul className="row">
            {article && article.map(item => 
              { return (<li key={item.id}>
                <div className="col-sm-9">{item.value}</div>
                <button onClick={() => this.handleVote(item.id)} className="col-sm-1 btn-info">Vote</button>
                <div className="col-sm-2">Voted Count: {item.count}</div>
              </li>)}
              )}
          </ul>
        </div>
        <button
          className="btn"
          onClick={()=>this.props.router.push("/")}
        >
        Go To Home
        </button>
      </section>
    );
  }
}


List.propTypes = {
  article: PropTypes.array,
  vote: PropTypes.func,
  router: PropTypes.object
};

const mapStateToProps = state=> ({
  article: state.article
});


const mapDispatchToProps = dispatch=> ({
  vote: id => dispatch({type: 'VOTE', id})
});

export default connect(mapStateToProps, mapDispatchToProps)(List);