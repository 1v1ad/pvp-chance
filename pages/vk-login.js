export default function VkLogin() {
  return (
    <div>
      <h2>Вход через VK OAuth</h2>
      <a href="https://oauth.vk.com/authorize?client_id=53969710&display=page&redirect_uri=https://pvp-chance.vercel.app/api/vk/callback&response_type=code&v=5.131">
        <button>Войти через VK</button>
      </a>
    </div>
  );
}
