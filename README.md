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
    replyTo: '<mail-replyTo> - optional',
    attachments: '[<attachment>] - optional'
  }
}
```

## Azure

You'll need a valid subscription and to setup the following resources

- resource group
- app service plan
- storage account
- servicebus namespace
- servicebus queue

### Setup function

The easiest way to make this function run is to setup an app service, configure the app and get the function from GitHub.

- add function app
  - Runtime stack -> Node

Configuration for app (Application settings)
```
SERVICEBUS_CONNECTION=Endpoint=sb://<your-servicebus-namespace-connection-string>
SERVICEBUS_QUEUE_NAME=your-servicebus-queue-name
SENDGRID_SECRET=your-sendgrid-secret
```

- add function
  - Plattform features -> deployment center
  - github
  - branch master

## Setup development

`local.settings.json`

```JavaScript
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<storage-accesskeys-key1-connectionstring>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "SERVICEBUS_CONNECTION": "<sb-sharedaccesspolicies-rootmanagesharedaccesskey-primaryconnectionstring>",
    "SERVICEBUS_QUEUE_NAME": "<your-servicebus-queue-name>",
    "SENDGRID_SECRET": "<your-sendgrid-secret>"
  }
}
```

## License

[MIT](LICENSE)
