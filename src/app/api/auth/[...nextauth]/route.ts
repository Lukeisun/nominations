import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET ?? "",
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID ?? "",
      clientSecret: process.env.TWITCH_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };
