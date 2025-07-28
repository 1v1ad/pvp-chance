import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Загрузка...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>PvP Chance</h1>
      {session ? (
        <>
          <p>Вы вошли как {session.user.name}</p>
          <button onClick={() => signOut()}>Выйти</button>
        </>
      ) : (
        <>
          <p>Вы не вошли</p>
          <button onClick={() => signIn("vk")}>Войти через VK</button>
        </>
      )}
    </div>
  );
}