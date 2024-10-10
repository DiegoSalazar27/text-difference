import * as fs from "fs/promises"

export async function getData(): Promise<string> {
  try {
    const data = await fs.readFile("./data.json")
    return data.toString();
  } catch (error) {
    console.error("Error getting data", error);
    throw error;
  }
}


export async function getFixedData(): Promise<string> {
  try {
    const data = await fs.readFile("./test.json")
    return data.toString();
  } catch (error) {
    console.error("Error getting data", error);
    throw error;
  }
}

