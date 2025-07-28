export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("No code provided");
  }

  const params = new URLSearchParams({
    client_id: process.env.VK_CLIENT_ID,
    client_secret: process.env.VK_CLIENT_SECRET,
    redirect_uri: process.env.VK_REDIRECT_URI,
    code
  });

  try {
    const tokenRes = await fetch(`https://oauth.vk.com/access_token?${params}`);
    const data = await tokenRes.json();

    if (data.error) {
      return res.status(400).send('VK error: ' + data.error_description);
    }

    const { user_id } = data;

    // cookie на 7 дней
    res.setHeader('Set-Cookie', `vk_user_id=${user_id}; Max-Age=604800; Path=/; HttpOnly; SameSite=Lax`);

    // редирект в лобби
    return res.redirect(302, '/lobby');
  } catch (err) {
    console.error('VK callback error:', err);
    return res.status(500).send('Internal server error');
  }
}
