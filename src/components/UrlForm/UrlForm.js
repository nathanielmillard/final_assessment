import React, { Component } from 'react';
import {postUrl} from '../../apiCalls';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id
    if(this.props.urls.length){
      id = this.props.urls.length + 1
    } else {
      id = "1"
    }
    console.log(id)
    postUrl(id, this.state.urlToShorten, this.state.title)
    this.clearInputs();
    this.props.updateURls();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          onChange={this.handleNameChange}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          onChange={this.handleNameChange}
        />

        <button onClick={this.handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
