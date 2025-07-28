import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>PvP Chance</h1>
      {!session ? (
        <>
          <p>Вы не вошли</p>
          <button onClick={() => signIn("vk")}>Войти через VK</button>
        </>
      ) : (
        <>
          <p>Вы вошли как {session.user.name}</p>
          <img src={session.user.image} alt="avatar" width={64} height={64} />
          <br />
          <button onClick={() => signOut()}>Выйти</button>
        </>
      )}
    </main>
  );
}