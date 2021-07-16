import {DATE_REGEX, EMAIL_REGEX} from './Regex'

describe('Email test suite', () => {
  test('Valid email', () => {
    expect('valid@gmail.com').toMatch(EMAIL_REGEX)
    expect('valid@gmail.com.ny').toMatch(EMAIL_REGEX)
    expect('v@g.c.n').toMatch(EMAIL_REGEX)
  })

  test('Invalid email', () => {
    expect('invalid@gmail').not.toMatch(EMAIL_REGEX)
    expect('invalid').not.toMatch(EMAIL_REGEX)
    expect('invalid@').not.toMatch(EMAIL_REGEX)
    expect('invalid@sm').not.toMatch(EMAIL_REGEX)
    expect('invalid@gmail.').not.toMatch(EMAIL_REGEX)
  })
})

describe('Date test suite', () => {
  test('Valid date', () => {
    expect('2021-07-01').toMatch(DATE_REGEX)
  })

  test('Invalid date', () => {
    expect('abcdefgh').not.toMatch(DATE_REGEX)
    expect('202-01-02').not.toMatch(DATE_REGEX)
    expect('2021-1-02').not.toMatch(DATE_REGEX)
    expect('2021-01-0').not.toMatch(DATE_REGEX)
    expect('202101-02').not.toMatch(DATE_REGEX)
    expect('2021-0102').not.toMatch(DATE_REGEX)
    expect('2021010').not.toMatch(DATE_REGEX)
  })
})