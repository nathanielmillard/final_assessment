import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, waitFor} from '@testing-Library/react'
import App from './App.js'
import userEvent from '@testing-library/user-event'
import {getUrls, postUrl} from '../../apiCalls';
jest.mock('../../apiCalls')

describe('App', ()=> {
  it('Should render App specific elements', () => {
    getUrls.mockResolvedValue([{long_url: "https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function", title: "Stack Overflow", id: 2, short_url: "http://localhost:3001/useshorturl/2"}])
    render(
      <App
      />
    )
    let header = screen.getByTestId('header')
    let title = screen.getByText('URL Shortener')
    let loading = screen.getByText('No urls yet! Find some to shorten!')
    expect(header).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(loading).toBeInTheDocument()
  })
  it('Should render URLs after get', async () => {
    getUrls.mockResolvedValue([{long_url: "https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function", title: "Stack Overflow", id: 2, short_url: "http://localhost:3001/useshorturl/2"}])
    render(
      <App
      />
    )
    let title = await waitFor(()=> {
      return screen.getByText("Stack Overflow")
    })
    let shortLink = screen.getByRole('link')
    let longUrl = screen.getByText('https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function')
    expect(title).toBeInTheDocument()
    expect(shortLink).toBeInTheDocument()
    expect(longUrl).toBeInTheDocument()
  })
  it('Should allow a user to submit a new link', async () => {
    getUrls.mockResolvedValueOnce([{long_url: "https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function", title: "Stack Overflow", id: 2, short_url: "http://localhost:3001/useshorturl/2"}])
    getUrls.mockResolvedValueOnce([{long_url: "https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function", title: "Stack Overflow", id: 2, short_url: "http://localhost:3001/useshorturl/2"}, {long_url: "www.google.com", title: "google", id: 3, short_url: "http://localhost:3001/useshorturl/3"}])
    render(
      <App
      />
    )
    let title = await waitFor(()=> {
      return screen.getByText("Stack Overflow")
    })
    let shortLink = screen.getByRole('link')
    let longUrl = screen.getByText('https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function')
    expect(title).toBeInTheDocument()
    let titleInput = screen.getByPlaceholderText('Title...')
    let urlInput = screen.getByPlaceholderText('URL to Shorten...')
    userEvent.type(titleInput, 'google')
    expect(titleInput.value).toBe('google')
    userEvent.type(urlInput, 'www.google.com')
    expect(urlInput.value).toBe('www.google.com')
    let button = screen.getByRole('button')
    userEvent.click(button)
    let secondTitle = await waitFor(()=> {
      return screen.getByText("google")
    })
    let secondLink = screen.getByText("http://localhost:3001/useshorturl/3")
    expect(secondTitle).toBeInTheDocument();
    expect(secondLink).toBeInTheDocument();
  })
})
