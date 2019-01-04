module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "play the game" which is the help command with default prefix.
  // Don't actually do this; it's tacky
  //client.user.setActivity(`${client.config.defaultSettings.prefix}help`, {type: "PLAYING"});
};
