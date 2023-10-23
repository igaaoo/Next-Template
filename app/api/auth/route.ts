import { NextResponse } from "next/server";
const ldap = require('ldapjs');
import { generateToken } from "@/utils/jwtController";


// Configurações do servidor LDAP
const ldapUrl = process.env.AD_URL;
const bindUser = process.env.AD_USER;
const bindPassword = process.env.AD_PASS;

// Função para autenticar um usuário
function authenticateUser(username: string, password: string) {
  const client = ldap.createClient({ url: ldapUrl });


  return new Promise((resolve, reject) => {
    client.bind(bindUser, bindPassword, (err: any) => {
      if (err) {
        client.unbind();
        console.log('LDAP Bind Error: ' + JSON.stringify(err));
        reject(err);
      } else {
        const userDn = `${username}@example.local`;

        // Tente autenticar o usuário
        client.bind(userDn, password, (authErr: any) => {
          client.unbind();

          if (authErr) {
            console.log('LDAP Auth Error: ' + JSON.stringify(authErr));
            reject(authErr);
          } else {
            // Autenticação bem-sucedida

            resolve(true);
          }
        });
      }
    });
  });
}


export async function POST(request: Request, response: NextResponse) {


  const { username, password } = await request.json();

  if (!username || !password) return NextResponse.json({ message: 'Invalid Credentials' }, { status: 401 });


  // const auth = await authenticateUser(username, password);
  // if (!auth) return NextResponse.json({ message: 'No User on AD' }, { status: 500 });

  // For testing purposes
  try {
    const userJWT = generateToken({ user: username, role: "admin" });

    return NextResponse.json({ message: "Authenticated", token: userJWT }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'User not found' }, { status: 500 });
  }
}

export async function GET() {

  return NextResponse.json({ message: "Auth service working!" }, { status: 200 });

}