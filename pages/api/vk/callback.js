export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  const params = new URLSearchParams({
    client_id: "53969710",
    client_secret: "eRgb6bTJPom62dvQTXtE",
    redirect_uri: "https://pvp-chance.vercel.app/api/vk/callback",
    code
  });

  try {
    const tokenRes = await fetch(`https://oauth.vk.com/access_token?${params}`);
    const data = await tokenRes.json();

    if (data.error) {
      return res.status(400).json({ error: data.error_description });
    }

    const { user_id } = data;

    const cookie = `vk_user_id=${user_id}; Max-Age=604800; Path=/; SameSite=Lax`;
    res.setHeader('Set-Cookie', cookie);

    // 👉 вместо редиректа — отладка
    return res.status(200).json({ success: true, user_id, cookie });
  } catch (err) {
    return res.status(500).json({ error: "Internal error", detail: err });
  }
}
