/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
// Search Kitsu for a user

exports.run = async (client, message, args, level) => {
  if (!args[0]) return message.channel.send('Please enter a user name.');
    var embed;
    var aniname = "";
    for (var i=0;i<args.length;i++) {
      aniname += args[i];
      if (i != args.length - 1) {
        aniname += " ";
      }
    }
    client.kitsu.getUser(aniname, 0).then(results => {
      if (!results[0]) {
        message.channel.send("No results found");
        client.logger.warn(`No Kitsu user found with the username ${aniname}`);
        return;
      }
      var aniresult = results[0].attributes;
      var userbio = aniresult.about || "No bio provided.";
      var followers = aniresult.followersCount || 0;
      var following = aniresult.followingCount || 0;
      var postcount = aniresult.postsCount || 0;
      var reactcount = aniresult.mediaReactionsCount || 0;
      embed = { "embed": {
          "title": aniresult.name,
          "description": userbio,
          "url": `https://kitsu.io/users/${aniresult.slug}`,
          "thumbnail": { "url": aniresult.avatar.large },
          "fields": [
              { "name": "Followers:", "value": followers.toString(), "inline": true },
              { "name": "Following:", "value": following.toString(), "inline": true },
              { "name": "Posts:", "value": postcount.toString(), "inline": true },
              { "name": "Reactions:", "value": reactcount.toString(), "inline": true }
          ]
      } };
      message.channel.send(embed);
      client.logger.log(`User ${aniresult.name} found on Kitsu`);
    });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "user",
    category: "Kitsu",
    description: "Show information about a user on Kitsu.",
    usage: "user [username]"
  };