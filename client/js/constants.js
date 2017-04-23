"use strict";

const commands = [
	"/away",
	"/back",
	"/banlist",
	"/close",
	"/connect",
	"/deop",
	"/devoice",
	"/disconnect",
	"/invite",
	"/join",
	"/kick",
	"/leave",
	"/me",
	"/mode",
	"/msg",
	"/nick",
	"/notice",
	"/op",
	"/part",
	"/query",
	"/quit",
	"/raw",
	"/say",
	"/send",
	"/server",
	"/slap",
	"/topic",
	"/voice",
	"/whois",
];

const handledTypes = [
	"invite",
	"join",
	"mode",
	"kick",
	"nick",
	"part",
	"quit",
	"topic",
	"topic_set_by",
	"action",
	"whois",
	"ctcp",
	"channel_list",
];
var condensedTypes = [
	"join",
	"mode",
	"nick",
	"part",
	"quit",
];

module.exports = {
	commands: commands,
	condensedTypes: condensedTypes,
	handledTypes: handledTypes,
};
