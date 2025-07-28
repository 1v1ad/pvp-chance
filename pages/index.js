export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>VK ID Proxy Login</h1>
      <a href="https://oauth.vk.com/authorize?client_id=53969710&display=page&redirect_uri=https://pvp-chance.vercel.app/api/vk/callback&scope=email&response_type=code&v=5.131">
        <button>Войти через VK</button>
      </a>
    </div>
  );
}
