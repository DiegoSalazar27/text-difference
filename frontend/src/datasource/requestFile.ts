import { serverUrl } from "@/const/server";
import { TextComparison } from "@/models/text";

export async function getJson() {
  const resp = await fetch(`${serverUrl}/api/data`, {
    method: 'GET',
  })

  if (!resp.ok) {
    throw new Error('Failed to fetch data')
  }

  return await resp.json() as TextComparison
}