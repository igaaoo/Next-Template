export function FormatStore(rows: any) {

  var convertedResult = rows.map((row: any) => {

    return {
      name: row[0],
      role: row[1],
      phone: row[2],
      salary: row[3],
    };
  });

  return convertedResult;



}