const sendMail = require('../lib/send-mail')

module.exports = async function (context, mySbMsg) {
  context.log(`${mySbMsg.id} - start`)
  try {
    const result = await sendMail(context, mySbMsg.payload)
    context.log(`${mySbMsg.id} - ${JSON.stringify(result)}`)
    context.log(`${mySbMsg.id} - finished`)
  } catch (error) {
    context.log.error(`${mySbMsg.id} - ${error}`)
    throw error
  }
}
