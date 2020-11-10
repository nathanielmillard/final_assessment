import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-Library/react'
import UrlContainer from './UrlContainer.js'

describe('UrlContainer', ()=> {
  it('Should redner appropriate tags when passed data', () => {
    render(
      <UrlContainer
       urls={[{long_url: "https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function", title: "Stack Overflow", id: 2, short_url: "http://localhost:3001/useshorturl/2"}]}
      />
    )
    let title = screen.getByText("Stack Overflow")
    let shortLink = screen.getByRole('link')
    let longUrl = screen.getByText('https://stackoverflow.com/questions/30142361/react…t-typeerror-this-props-data-map-is-not-a-function')
    expect(title).toBeInTheDocument()
    expect(shortLink).toBeInTheDocument()
    expect(longUrl).toBeInTheDocument()
  })
})
