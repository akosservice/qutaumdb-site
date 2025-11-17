import { promises as fs } from "fs";
import path from "path";

// Important: __dirname resolves to /server/storage
const DB_PATH = path.join(__dirname, "..", "database", "newsletter.json");

export async function getAllSubscribers() {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON:", err);
    return [];
  }
}

export async function addSubscriber(email: string) {
  try {
    const list = await getAllSubscribers();

    if (list.includes(email)) return false;

    list.push(email);

    await fs.writeFile(DB_PATH, JSON.stringify(list, null, 2), "utf-8");

    return true;
  } catch (err) {
    console.error("Error writing JSON:", err);
    return false;
  }
}
