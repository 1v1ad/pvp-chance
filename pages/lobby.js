
import Link from 'next/link';

const games = [
  { name: 'Дуэль 1 на 1', slug: '1v1' },
  { name: '1 против 2', slug: '1v2' },
  { name: 'Супер-игра 1 на 100', slug: '1v100' },
  { name: 'Создать свою игру', slug: 'custom' },
];

export default function Lobby() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Выбор игры</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {games.map((game) => (
          <Link key={game.slug} href={`/game/${game.slug}`}>
            <div style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9',
              cursor: 'pointer'
            }}>
              {game.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
