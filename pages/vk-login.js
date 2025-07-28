import { useEffect } from 'react';

export default function VkLogin() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vkid/sdk@2.6.0/dist-sdk/umd/index.js';
    script.onload = () => {
      const VKID = window.VKIDSDK;

      VKID.Config.init({
        app: 53969710,
        redirectUrl: 'https://pvp-chance.vercel.app/vk-login',
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE
      });

      const oneTap = new VKID.OneTap();
      oneTap.render({
        container: document.getElementById('vkid-container'),
        showAlternativeLogin: true
      })
      .on(VKID.WidgetEvents.ERROR, (err) => {
        console.error('VKID error:', err);
      })
      .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
        const code = payload.code;
        const deviceId = payload.device_id;

        // Отправляем code + deviceId на backend
        fetch('/api/vk/exchange', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, deviceId })
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            window.location.href = '/lobby';
          } else {
            console.error('VK backend error:', data);
          }
        })
        .catch(err => {
          console.error('Exchange failed:', err);
        });
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
