import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const id = Math.round(Math.random()*100);
    this.props.router.push("/list");
    this.props.createArt(this.state.value, id);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container form-group">
        <label htmlFor="article">
          Write:
          <textarea
            placeholder="Please write an article ."
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            cols="35" 
            rows="20" 
          />
        </label>
        <div>
          <input
            type="submit"
            value="Submit"
            className="btn" 
          />
        </div>
      </form>
    );
  }
}

Create.propTypes = {
  router: PropTypes.object,
  createArt: PropTypes.func
};

const mapDispatchToProps = dispatch=> ({
  createArt: (value, id) => dispatch({type: 'CREATE', value, id})
});

export default connect(null, mapDispatchToProps)(Create);
