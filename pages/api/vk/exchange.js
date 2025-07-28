export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, deviceId } = req.body;

  if (!code || !deviceId) {
    return res.status(400).json({ error: 'Missing code or deviceId' });
  }

  const params = new URLSearchParams({
    client_id: "53969710",
    client_secret: "eRgb6bTJPom62dvQTXtE",
    code,
    device_id: deviceId
  });

  try {
    const response = await fetch("https://api.vk.com/method/auth.exchangeCode", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    const result = await response.json();

    if (result.error) {
      return res.status(400).json({ error: result.error.error_msg || 'VK exchange error' });
    }

    const user_id = result.response.user.id;

    res.setHeader('Set-Cookie', `vk_user_id=${user_id}; Max-Age=604800; Path=/; HttpOnly; SameSite=Lax`);
    return res.status(200).json({ success: true, user_id });
  } catch (err) {
    console.error('VK exchange failed:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
