import NextAuth from "next-auth";
import VKProvider from "next-auth/providers/vk";

export default NextAuth({
  providers: [
    VKProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
      authorization: {
        url: "https://oauth.vk.com/authorize",
        params: {
          scope: "email",
          response_type: "code",
          redirect_uri: "https://pvp-chance.vercel.app/api/auth/callback/vk",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
