
export default function Login() {
  const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=${process.env.NEXT_PUBLIC_VK_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_VK_REDIRECT_URI}&response_type=code&scope=email&v=5.131`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <a href={vkAuthUrl}>
        <button style={{ padding: '12px 20px', fontSize: '16px' }}>
          Войти через VK
        </button>
      </a>
    </div>
  );
}
