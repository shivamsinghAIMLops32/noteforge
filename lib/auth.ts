import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; 
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import VerificationEmail from "@/components/email/verification-email";

const resend = new Resend(process.env.RESEND_API_KEY);
 
export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ( { user, url, token }, request) => {
      const { data, error } = await resend.emails.send({
        from: 'NoteForge <blazegaming603@gmail.com>',
        to: [user.email],
        subject: 'Verify your email address',
        react: VerificationEmail({ userName: user.name, verificationUrl: url }),
      });
    },
    sendOnSignIn: true,
  },
  emailAndPassword: {
    enabled: true, 
  }, 
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: schema,
    }),
    plugins: [nextCookies()]
});