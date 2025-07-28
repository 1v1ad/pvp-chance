import NextAuth from "next-auth";
import VKProvider from "next-auth/providers/vk";

export default NextAuth({
  providers: [
    VKProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "email",
          response_type: "code"
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NEXTAUTH_DEBUG === "true",
});