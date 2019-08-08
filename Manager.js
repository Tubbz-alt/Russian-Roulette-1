const Discord = require("discord.js");
const dbl = require("dblapi.js")
const http = require("http")
const express = require("express")

const ConfigFile = require("./config")

const app = express()

const dblWebhook = new dbl(process.env.dblToken,{webhookPort: process.env.PORT, webhookAuth: `${process.env.authentication}`})
const client = new Discord.Client();

dblWebhook.webhook.on('ready', hook => {
    console.log(`Webhook Running!`);
    console.log(`http://${hook.hostname}:${hook.port}${hook.path}`);
});

dblWebhook.webhook.on('vote', vote => {
    console.log(vote)
    client.fetchWebhook("527324432511795208","kQbR4QuXe_XCkTe61mwtfmU2PGfJOtgWqvWQFjA1iGwD6BobXcGcObmSdfRmYi1EMUbU").then(hook => {
        client.fetchUser(vote.user).then(user => {
            hook.sendMessage(`${user.username} just voted! They get a mine bribe!`)
        })
        userModel.findOne({
            UserId:user
        }, (err,user) => {
            if (err){console.error(err)}
            if(!user) {
                let Member = client.fetchUser(user).then(member => {return member.tag})
                const newUser = new userModel({
                    UserId: user,
                    UserTag: Member || "Can't find",
                    wins: 0,
                    draws: 0,
                    loses: 0,
                    money: 0,
                    inventory: [
                        `Mine Bribe`
                    ]
                })
                return newUser.save()
            }else{
                user.inventory.push(`Mine Bribe`)
                user.save()
            }
        })
    })
});

app.post("/vote",(req,res) => {
    console.log(req.body)
})

client.login(ConfigFile.config.token);
app.listen(process.env.PORT || 5000)