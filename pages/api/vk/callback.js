export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }

  const params = new URLSearchParams({
    client_id: process.env.VK_CLIENT_ID,
    client_secret: process.env.VK_CLIENT_SECRET,
    redirect_uri: process.env.VK_REDIRECT_URI,
    code,
  });

  try {
    const tokenRes = await fetch(`https://oauth.vk.com/access_token?${params}`);
    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      return res.status(500).json({ error: 'Failed to get access_token', details: tokenData });
    }

    const userRes = await fetch(`https://api.vk.com/method/users.get?user_ids=${tokenData.user_id}&v=5.131&access_token=${tokenData.access_token}`);
    const userData = await userRes.json();

    if (!userData.response) {
      return res.status(500).json({ error: 'Failed to get user info', details: userData });
    }

    const user = userData.response[0];

    res.setHeader('Set-Cookie', \`vk_user=\${encodeURIComponent(JSON.stringify(user))}; Path=/; HttpOnly; SameSite=Lax\`);

    return res.redirect('/');
  } catch (err) {
    return res.status(500).json({ error: 'OAuth VK failed', message: err.message });
  }
}
