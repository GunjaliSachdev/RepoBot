'use strict'

const http = require('http')

const Bot = require('messenger-bot')




let bot = new Bot({

  token: ' EAAIaV6dG3XEBACCzZA0wFARptoUQzLrZByo5wJ1ZAgC6TxQQhKP1jw4XInGq3p14BeJYBZAl1oZBNkT48P96i8PWbkVuIVxb814xreR4t5gaXD6ZAMDZB0seJ1JiWPdkrKZCLvmjX3QjZBjuYnqBV0WDlIPl1Wm3dQtHTx9kHlJjQWAZDZD',

  verify: 'VERIFY_TOKEN'

})




bot.on('error', (err) => {

  console.log(err.message)

})




bot.on('message', (payload, reply) => {

  let text = payload.message.text




  bot.getProfile(payload.sender.id, (err, profile) => {

    if (err) throw err




    reply({ text }, (err) => {

      if (err) throw err




      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)

    })

  })

})




http.createServer(bot.middleware()).listen(3000)

