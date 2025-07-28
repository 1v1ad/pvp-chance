import { useEffect } from 'react';

export default function VkLogin() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vkid/sdk/dist-sdk/umd/index.js';
    script.onload = () => {
      if (!window.VKIDSDK) return;
      const VKID = window.VKIDSDK;
      VKID.Config.init({
        app: 53969710,
        redirectUrl: 'https://pvp-chance.vercel.app/api/vk/callback',
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE
      });

      const oneTap = new VKID.OneTap();
      oneTap.render({
        container: document.getElementById('vkid-container'),
        showAlternativeLogin: true,
        onAuth: (user) => {
          console.log('VK One Tap auth', user);
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2>Вход через VK One Tap</h2>
      <div id="vkid-container" />
    </div>
  );
}
