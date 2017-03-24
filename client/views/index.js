"use strict";

module.exports = {
	actions: {
		action: require("./actions/action.tpl"),
		ban_list: require("./actions/ban_list.tpl"),
		channel_list: require("./actions/channel_list.tpl"),
		ctcp: require("./actions/ctcp.tpl"),
		invite: require("./actions/invite.tpl"),
		join: require("./actions/join.tpl"),
		kick: require("./actions/kick.tpl"),
		mode: require("./actions/mode.tpl"),
		nick: require("./actions/nick.tpl"),
		part: require("./actions/part.tpl"),
		quit: require("./actions/quit.tpl"),
		topic: require("./actions/topic.tpl"),
		topic_set_by: require("./actions/topic_set_by.tpl"),
		whois: require("./actions/whois.tpl"),
	},

	chan: require("./chan.tpl"),
	chat: require("./chat.tpl"),
	connection_list: require("./connection_list.tpl"),
	contextmenu_divider: require("./contextmenu_divider.tpl"),
	contextmenu_item: require("./contextmenu_item.tpl"),
	date_marker: require("./date-marker.tpl"),
	msg: require("./msg.tpl"),
	msg_action: require("./msg_action.tpl"),
	msg_condensed_toggle: require("./msg_condensed_toggle.tpl"),
	msg_condensed: require("./msg_condensed.tpl"),
	msg_preview: require("./msg_preview.tpl"),
	msg_preview_toggle: require("./msg_preview_toggle.tpl"),
	msg_unhandled: require("./msg_unhandled.tpl"),
	network: require("./network.tpl"),
	image_viewer: require("./image_viewer.tpl"),
	unread_marker: require("./unread_marker.tpl"),
	user: require("./user.tpl"),
	user_filtered: require("./user_filtered.tpl"),
	user_name: require("./user_name.tpl"),
};
