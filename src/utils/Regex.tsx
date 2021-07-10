// Matches if '@' and '.' are present and with texts before and after them
export const EMAIL_REGEX: RegExp = /.+@.+\..+/

// day(2 characters) - month(3 letters) - year(4 characters)
export const DATE_REGEX: RegExp = /^\d{4}-\w{2}-\d{2}$/