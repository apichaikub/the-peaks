import { getId } from '../../../helpers/utils'

describe('getId', () => {
  it('should return value correctly', () => {
    const result = getId(['politics', 'live', '2021', 'jun', '29', 'uk-covid-live-news-latest-updates-schools'])
    expect(result).toEqual('politics/live/2021/jun/29/uk-covid-live-news-latest-updates-schools')
  })
  it('should return value correctly', () => {
    const result = getId(['0', '1', '2'])
    expect(result).toEqual('0/1/2')
  })
  it('should return value correctly', () => {
    const result = getId([])
    expect(result).toEqual('')
  })
})