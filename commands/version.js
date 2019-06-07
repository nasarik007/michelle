// Display the current version of the bot.

exports.run = async (client, message, args, level) => {
  const embed = { "embed": {
    "title": client.user.username == "Michelle" ? "Michelle" : `${client.user.username} (Based on Michelle)`,
    "description": `Version: ${process.env.npm_package_version}\n[Changelog](https://michelle.jacenboy.com/changelog)`,
    "color": client.colorInt("#fca2cd")
  } };
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  special: false,
  aliases: ["ver","v"],
  permLevel: "User"
};

exports.help = {
  name: "version",
  category: "System",
  description: "Get the current version of the bot.",
  usage: "version"
};