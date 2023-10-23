import { NextResponse } from "next/server";
const db = require("../../../backend/config/connection");
import { FormatStore } from "@/lib/utils/formatData";
import { validateToken } from "@/utils/jwtController";

export async function POST(request: Request, response: Response) {
  const { token } = await request.json();

  if (!token || !validateToken(token)) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });


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
}