import NextAuth from "next-auth";
import VKProvider from "next-auth/providers/vk";

export default NextAuth({
  providers: [
    VKProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});