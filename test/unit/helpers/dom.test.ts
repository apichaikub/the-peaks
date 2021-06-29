import { removeHTML } from '../../../helpers/dom'

describe('removeHTML', () => {
  it('should return value correctly', () => {
    const result = removeHTML('<p>Hello</p>')
    expect(result).toEqual('Hello')
  })
  it('should return value correctly', () => {
    const result = removeHTML(`<p>Hell<strong>o</strong></p>`)
    expect(result).toEqual('Hello')
  })
  it('should return value correctly', () => {
    const result = removeHTML(`Hello<br/>`)
    expect(result).toEqual('Hello')
  })
})