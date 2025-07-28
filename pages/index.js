import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://vk.com/js/api/openapi.js?169" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.vkAsyncInit = function () {
                VK.init({
                  apiId: ${process.env.NEXT_PUBLIC_VK_CLIENT_ID}
                });
                VK.Widgets.Auth("vk_auth", {
                  authUrl: "/api/vk/callback"
                });
              };
            `
          }}
        />
      </Head>
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1>VK One Tap Авторизация</h1>
        <div id="vk_auth"></div>
      </div>
    </>
  );
}
