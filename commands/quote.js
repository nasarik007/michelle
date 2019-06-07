// Pulls a random quote from a JSON file and displays it.

exports.run = async (client, message, args, level) => {
  var randquote = client.quotes.random();
  const embed = { "embed": { "description": randquote.quote, "fields": [ { "name": "-", "value": randquote.attribution } ] } };
  message.channel.send(embed);
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  special: false,
  aliases: [],
  permLevel: "User"
};
  
exports.help = {
  name: "quote",
  category: "Entertainment",
  description: "Displays a random quote.",
  usage: "quote"
};