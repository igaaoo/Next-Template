import { NextResponse } from "next/server";
const db = require("../../../backend/config/connection");
import { FormatStore } from "@/lib/utils/formatData";

export async function POST(request: Request, response: Response) {
  const { token } = await request.json();


  if (token == process.env.TOKEN) {
    try {
      var connection = await db.connect();

      console.log("Geting data...");

      const response = await connection.execute(
        "SELECT * FROM example.table"
      );

      var result = FormatStore(response.rows);

    } catch (err: any) {
      return err;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err: any) {
          return err;
        }
      }
    }


    return NextResponse.json({ result, }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid User/Token' }, { status: 401 });
  }


}