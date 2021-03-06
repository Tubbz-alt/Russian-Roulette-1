const eris = require("eris");
const quickDb = require("quick.db")
const ms = require("ms")

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"kick",
    Information:{
      description: "Kick the user",
      fullDescription: "Kick a user from the guild",
      usage: "<user> <reason>",
      type: "moderation"
    }
  },
  Alias:"kock",
  RunCommand(args, msgObject,commands,client) {
    //console.log(commands)
    let mentioned = msgObject.mentions

    if(!msgObject.member.permission.has("kickMembers")){return msgObject.channel.createMessage("I can't let you do this without permissions")}
    let args_without_mention = []
    for (let i = 1; i < args.length; i++) {
        const string = args[i];
        if(!string){args_without_mention = ["No", "reason","given"]}
        args_without_mention.push(string)
    }
    let reason = args_without_mention.join(" ")
    if(reason == ""){reason = "No reason given"}
    msgObject.channel.guild.kickMember(mentioned[0].id,`Reason: ${reason} Moderator: ${msgObject.member.user.username}`).catch(err => {
        msgObject.channel.createMessage(`Can't kick user! | ${err}`);
    })
  }
}

module.exports = command
