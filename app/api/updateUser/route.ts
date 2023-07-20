import { NextResponse } from "next/server";
const db = require("../../../backend/config/connection");

export async function POST(request: Request, response: Response) {
  const { token, name, role, phone, salary } = await request.json();


  if (token == process.env.TOKEN) {
    try {
      var connection = await db.connect();

      const query = `UPDATE example.table SET phone = :phone, role = :role, salary = :salary WHERE name = :name`; // Exemplo de query

      console.log("Atualização para: ", name, "Novo role: ", role, "Novo phone: ", phone);

      const result = await connection.execute(query, [phone, role, salary, name]);

      // Verifique se a atualização foi bem-sucedida
      if (result.rowsAffected >= 1) {
        console.log("Success updating data!");

        // Executar commit
        await connection.commit();
      } else {
        console.log("Fail on updating data!");
      }
    } catch (err: any) {
      return NextResponse.json({ error: err }, { status: 401 });
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err: any) {
          return err;
        }
      }
    }
    return NextResponse.json({ result: "Succes!" }, { status: 200 });

  } else {
    return NextResponse.json({ message: 'Invalid user or token!' }, { status: 401 });
  }


}