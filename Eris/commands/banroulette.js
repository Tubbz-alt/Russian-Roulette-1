const eris = require("eris");

const config = require("../config").config
const {isNull} = require("util")

let command = {
  description:{
    Name:"banroulette",
    Information:{
      description: "Play ban roulette",
      fullDescription: "Play a game of ban roulette, lose and you get banned",
      usage: "<players>",
      type: "fun"
    }
  },
  Alias:"br",
  RunCommand(args, msgObject) {
    let mentioned = msgObject.mentions
    let results = [];

    if(!msgObject.member.permission.has("banMembers")){return msgObject.channel.createMessage("I can't let you do this without permissions")}

    if (mentioned.length == 0) {
      msgObject.channel.createMessage("Please mention at least 1 person!");
      return;
    }

    msgObject.channel.createMessage("Calculating results!");

    let number = Math.floor(Math.random() * (6 - 1) + 1);

    function Play(Current) {
      const user = mentioned[Current];
      if (Current + 1 == number) {
        results.push(`\n ${user.username}'s gun: **BANG**`);

        msgObject.channel.guild.banMember(user.id,`Lost game of kick roulette`).catch(err => {
            msgObject.channel.createMessage("Can't ban user!");
        })

      } else {
        results.push(`\n ${user.username}'s gun: *click*`);
        
      }
    }

    for (let Current = 0; Current < mentioned.length; Current++) {
      Play(Current);
    }

    msgObject.channel.createMessage({
        embed: {
            title: "Results",
            description: `${results.map(x => x)}`,
            color: 0xF45B4D
        }
    })
  }
}

module.exports = command
