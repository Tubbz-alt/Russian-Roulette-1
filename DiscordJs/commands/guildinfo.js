"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");

let userModel = require("../models/user")
let configModel = require("../models/guild")

class guildinfo {
    constructor() {
        this._command = "guildinfo";
        this._alist = "gi"
    }
    alist() {
        return this._alist
    }
    isThisCommand(command) {
        if(command === this._alist){return true}else{
            if(command === this._command){return true}
        }
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let guild = msgObject.guild
            let embed = new Discord.RichEmbed()
            .setTitle(`${guild.name}'s Information`)
            .setDescription(`Name: ${guild.name} \n \n Id: ${guild.id} \n \n Members: ${guild.memberCount}  \n \n Owner: ${guild.owner.user.tag} \n \n Region: ${guild.region} \n \n Channels: ${guild.channels.array().length} \n \n Roles: ${guild.roles.array().length} \n \n Creation Date: ${guild.createdAt} \n \n Emojis: ${guild.emojis.array().length}`)
            .setThumbnail(`${guild.iconURL}`)
            .setColor("#46cf56")
            msgObject.channel.send(embed)
        });
    }
}
exports.default = guildinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFPdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBbUJ0QyxDQUFDO0lBakJHLElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDakMsUUFBUSxDQUFDLGtCQUFrQixFQUFDLHdEQUF3RCxDQUFDO2lCQUNyRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsdUJBcUJDIn0=