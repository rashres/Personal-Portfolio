import Discord from 'discord.js';

// Create a single instance of the Discord client
const client = new Discord.Client({ intents: [] });

// Log in the client and handle the ready event
client.login(process.env.DISCORD_TOKEN);
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

export default async function handler(req, res) {
  if (!client.isReady()) {
    res.status(503).json({ success: false, message: 'Discord client not ready' });
    return;
  }

  try {
    let user = await client.users.fetch("1086008411872821258");

    let fields = Object.keys(req.body).map((key) => ({
      name: key.toUpperCase(),
      value: req.body[key] || "-",
    }));

    let messagePayload = {
      embeds: [{
        description: "We have a new message!",
        color: 4310753,
        timestamp: new Date().toISOString(),
        footer: {
          icon_url: "https://shres.dev/favicon.ico",
          text: "shres.dev",
        },
        fields: fields,
      }],
    };

    await user.send(messagePayload);

    res.json({ success: true, body: req.body });
  } catch (error) {
    console.error('Error in the contact form handler:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}
