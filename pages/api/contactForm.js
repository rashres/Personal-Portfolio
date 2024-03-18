import Discord from "discord.js";

// Initialize the client with intents if needed.
const client = new Discord.Client({ intents: [] });

// Function to ensure the client is ready
async function ensureClientReady() {
  if (!client.isReady()) {
    await client.login(process.env.DISCORD_TOKEN);
    await new Promise(resolve => client.once("ready", resolve));
  }
}

export default async function handler(req, res) {
  try {
    // Ensure the client is logged in and ready.
    await ensureClientReady();

    let user = await client.users.fetch("1086008411872821258");

    let fields = Object.keys(req.body).map(key => ({
      name: key.toUpperCase(),
      value: req.body[key] || "-",
    }));

    await user.send({
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
    });

    res.json({ success: true, body: req.body });
  } catch (error) {
    console.error("Failed to send message:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
