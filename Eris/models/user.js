"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const discord = require("discord.js");
const userSchema = new mongoose.Schema({
    UserId: String,
    wins: Number,
    draws: Number,
    loses: Number,
    money: Number,
    inventory: Array
});

module.exports = mongoose.model("User", userSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFvQztBQUNwQyxzQ0FBcUM7QUFFckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25DLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQ25DLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztJQUNwRCxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztJQUM5QyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztJQUMvQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztJQUMvQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztJQUMvQyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBQztDQUN0RCxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBIn0=