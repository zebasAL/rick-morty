import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
// import Auth0Provider from "next-auth/providers/auth0";

declare type ISODateString = string;
interface Session {
  id?: string | unknown,
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id?: string; 
  };
  expires: ISODateString;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  // adapter,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      authorize: (credentials) => {
        if (credentials?.username === "sebastian" && credentials?.password === "123456") {
          return {
            id: "2",
            name: "sebastian" || null,
            email: "zebastian_al@hotmail.com" || null,
          };
        };
        return null
      },
    }),
  ],
  pages: {
    error: "/error", // here set customized error page.
  },
  callbacks: {
    jwt: ({ token, user, isNewUser }) => {
      if (user) token.id = user.id;
      return token;
    },
    // Include user.id on session
    session: ({ session, user, token }) => {
      const sessionRef: Session = session
      if (sessionRef && token.id) sessionRef.id = token.id;
      if (sessionRef?.user && user.id) sessionRef.user.id = user.id;
      return sessionRef;
    },
    redirect: ({ url, baseUrl }) => {
      return url;
    },
    signIn: ({ user, credentials }) => {
      return true;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
  },
};

export default NextAuth(authOptions);
