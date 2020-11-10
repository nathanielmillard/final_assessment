import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-Library/react'
import UrlForm from './UrlForm.js'
import userEvent from '@testing-library/user-event'
import {postUrl} from '../../apiCalls';
jest.mock('../../apiCalls')

describe('UrlForm', ()=> {
  it('Should render appropriate form elements', () => {
    let mockUpdateURls = jest.fn()
    render(
      <UrlForm
      urls={[]}
      updateURls={mockUpdateURls}
      />
    )
    let inputs = screen.getAllByRole('textbox')
    let button = screen.getByRole('button')
    let titleInput = screen.getByPlaceholderText('Title...')
    let urlInput = screen.getByPlaceholderText('URL to Shorten...')
    expect(inputs[0]).toBeInTheDocument()
    expect(inputs[1]).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
    expect(urlInput).toBeInTheDocument()
  })
  it('Should update values', () => {
    let mockUpdateURls = jest.fn()
    render(
      <UrlForm
      urls={[]}
      updateURls={mockUpdateURls}
      />
    )
    let titleInput = screen.getByPlaceholderText('Title...')
    let urlInput = screen.getByPlaceholderText('URL to Shorten...')
    userEvent.type(titleInput, 'google')
    expect(titleInput.value).toBe('google')
    userEvent.type(urlInput, 'www.google.com')
    expect(urlInput.value).toBe('www.google.com')
  })
  it('Should fire appropriate functions on submit', () => {
    let mockUpdateURls = jest.fn()
    render(
      <UrlForm
       urls={[]}
       updateURls={mockUpdateURls}
      />
    )
    let button = screen.getByText('Shorten Please!')
    let titleInput = screen.getByPlaceholderText('Title...')
    let urlInput = screen.getByPlaceholderText('URL to Shorten...')
    userEvent.type(titleInput, 'google')
    expect(titleInput.value).toBe('google')
    userEvent.type(urlInput, 'www.google.com')
    expect(urlInput.value).toBe('www.google.com')
    userEvent.click(button)
    expect(mockUpdateURls).toHaveBeenCalledTimes(1)
    expect(postUrl).toHaveBeenCalledTimes(1)
    expect(postUrl).toHaveBeenCalledWith(1, 'www.google.com', 'google')
  })
})
