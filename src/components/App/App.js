import React, { Component } from 'react';
import './App.css';
import { getUrls, deleteUrl } from '../../apiCalls.js';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.updateUrls()
  }

  updateUrls = async () => {
    let urls = await getUrls()
    this.setState({urls: urls})
  }
  deleteUrl = async (e) => {
    await deleteUrl(e.target.id)
    this.updateUrls()
  }

  render() {
    return (
      <main className="App">
        <header data-testid='header'>
          <h1>URL Shortener</h1>
          <UrlForm urls={this.state.urls} updateURls={this.updateUrls}/>
        </header>
        <UrlContainer deleteUrl={this.deleteUrl} urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
