import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LobbyPage() {
  const router = useRouter();

  useEffect(() => {
    const vkUserId = getCookie('vk_user_id');
    if (!vkUserId) {
      router.push('/vk-login');
    }
  }, []);

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }

  return <h1>Добро пожаловать в лобби!</h1>;
}
