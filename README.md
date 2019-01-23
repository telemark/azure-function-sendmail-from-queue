[![Build Status](https://travis-ci.com/telemark/azure-function-sendmail-from-queue.svg?branch=master)](https://travis-ci.com/telemark/azure-function-sendmail-from-queue)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# azure-function-sendmail-from-queue

Azure functions for sending emails from an sb queue.

## Message format

```JavaScript
{
  id: '<uuid>',
  payload: {
    to: '<mail-to>',
    from: 'mail-from',
    subject: '<subject>',
    text: '<text>',
    html: '<html> - optional',
    cc: '<mail-cc> - optional',
    bcc: '<mail-bcc> - optional',
    replyTo: '<mail-replyTo> - optional'
  }
}
```

## License

[MIT](LICENSE)
