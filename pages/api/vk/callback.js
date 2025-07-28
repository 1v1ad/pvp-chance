export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  const params = new URLSearchParams({
    client_id: process.env.VK_CLIENT_ID,
    client_secret: process.env.VK_CLIENT_SECRET,
    redirect_uri: process.env.VK_REDIRECT_URI,
    code
  });

  const tokenRes = await fetch(`https://oauth.vk.com/access_token?${params}`);
  const data = await tokenRes.json();

  if (data.error) {
    return res.status(400).json({ error: data.error_description });
  }

  return res.status(200).json({ user: data });
}
