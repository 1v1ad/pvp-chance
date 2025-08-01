export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("No code provided");
  }

  const params = new URLSearchParams({
    client_id: "53969710",
    client_secret: "eRgb6bTJPom62dvQTXtE",
    redirect_uri: "https://pvp-chance.vercel.app/api/vk/callback",
    code
  });

  try {
    const tokenRes = await fetch("https://oauth.vk.com/access_token?" + params.toString());
    const data = await tokenRes.json();

    if (data.error) {
      return res.status(400).send("VK error: " + data.error_description);
    }

    const { user_id } = data;

    res.setHeader('Set-Cookie', `vk_user_id=${user_id}; Max-Age=604800; Path=/; HttpOnly; SameSite=Lax`);
    return res.redirect(302, '/lobby');
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
}
