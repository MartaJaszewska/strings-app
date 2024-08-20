export default async function fetcher(url: RequestInfo | URL) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(res.json(), res.status);
    throw new Error("Error occured");
  }
  return res.json();
}
