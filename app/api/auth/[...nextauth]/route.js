import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/user";
import connectDB from "@/lib/mongodb";

async function findUser(email) {
  await connectDB();
  return User.findOne({ email });
}

async function createUser(email) {
  await connectDB();
  return User.create({ email });
}

async function authenticateUser(email, password) {
  const user = await findUser(email);
  if (user && (await bcrypt.compare(password, user.password))) {
    return user;
  } else if (!user) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    return newUser;
  }
  return null;
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await authenticateUser(
          credentials.email,
          credentials.password
        );
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-up",
    signOut: "/settings",
    error: "/",
  },
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (account.provider === "google") {
        // Check if user exists, if not, create in the database
        const existingUser = await findUser(user.email);
        if (!existingUser) {
          await createUser(user.email);
        }
      }
      return true; // Continue the sign-in process
    },
    jwt: async ({ token, user }) => {
      // You can accept the user argument to add user info to the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // Add user info to the session object
      session.user.id = token.id;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
