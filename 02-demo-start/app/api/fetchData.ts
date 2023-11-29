import { db } from "@/app/api/db";
import { MessageRow } from "@/app/api/model";

const QUERY = "SELECT * FROM MESSAGE WHERE ID = 1";
//
export async function fetchData(): Promise<MessageRow> {
  const row = await db.get<MessageRow>(QUERY);
  return row;
}

export async function fetchAllData(): Promise<MessageRow[]> {
  const rows = await db.all<MessageRow>("SELECT * FROM MESSAGE");
  return rows;
}

// Initial demo code
// export async function fetchData(): Promise<MessageRow> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, text: "Hello from Backend!" });
//     }, 1000);
//   });
// }
