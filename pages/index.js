
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Добро пожаловать в PvP Chance!</h1>
      <p>Выберите действие:</p>
      <ul>
        <li><Link href="/top-up">Пополнить баланс</Link></li>
        <li><Link href="/lobby">Начать игру</Link></li>
      </ul>
    </div>
  );
}
