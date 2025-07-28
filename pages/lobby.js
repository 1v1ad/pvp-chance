import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LobbyPage() {
  const router = useRouter();

  useEffect(() => {
    const userId = getCookie('vk_user_id');
    if (!userId) {
      router.push('/vk-login');
    }
  }, []);

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  return <h1>Добро пожаловать в лобби!</h1>;
}
