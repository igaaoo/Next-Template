import { NextResponse } from "next/server";

const ad = require('../../../backend/config/activeDirectory');


export async function POST(request: Request, response: NextResponse) {


  const { username, password } = await request.json();


  //Método para autenticar usuários
  function authenticateUser(username: string, password: string) {
    return new Promise((resolve, reject) => {
      ad.authenticate(username + '@example.local', password, (err: any, auth: any) => {
        if (err) {
          console.log('ERROR: ' + JSON.stringify(err));
          reject(err);
        } else if (auth) {
          console.log('Authenticated!');
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  // const auth = await authenticateUser(username, password);

  // For testing purposes
  const auth = true;

  if (auth) {
    return NextResponse.json({ message: "Authenticated", token: process.env.TOKEN }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Incorrect user or password!' }, { status: 401 });
  }
}

export async function GET() {

  return NextResponse.json({ message: "Auth service working!" }, { status: 200 });

}