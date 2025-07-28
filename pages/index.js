
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>PvP Chance</h1>
        <p>Привет, {session.user.name}</p>
        <button onClick={() => signOut()}>Выйти</button>
      </>
    );
  }

  return (
    <>
      <h1>PvP Chance</h1>
      <p>Вы не вошли</p>
      <button onClick={() => signIn("vk")}>Войти через VK</button>
    </>
  );
}
