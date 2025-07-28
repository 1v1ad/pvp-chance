
export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("No code provided");
  }

  const params = new URLSearchParams({
    client_id: process.env.VK_CLIENT_ID,
    client_secret: process.env.VK_CLIENT_SECRET,
    redirect_uri: process.env.VK_REDIRECT_URI,
    code
  });

  const response = await fetch(`https://oauth.vk.com/access_token?${params.toString()}`);
  const data = await response.json();

  if (data.error) {
    return res.status(400).json({ error: data });
  }

  // Просто отображаем токен и email для отладки
  return res.status(200).json(data);
}
