# azure-function-sendmail-from-queue

Azure functions for sending emails from an sb queue

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
