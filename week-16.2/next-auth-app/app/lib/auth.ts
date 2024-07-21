import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";


export const config = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'example@email.com' },
                password: { label: 'password', type: 'password', placeholder: 'password' },
            },
            async authorize(credentials: any) {
                const { username, password } = credentials;

                console.log(`username: ${username} \npassword: ${password}`);

                return {
                    id: "1",
                    email: username,
                    name: 'Akash'
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({ token, user }: any) => {
            console.log(`token: ${JSON.stringify(token)}`);
            token.userId = token.sub;

            return token;
        },
        session: ({ token, user, session }: any) => {
            if (session?.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    }
};