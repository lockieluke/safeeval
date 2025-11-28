
export async function isURLReachable(url: string): Promise<boolean> {
  const response = await fetch(url, { method: "HEAD" });

  return response.ok;
}

export async function fetchScript(url: string) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to fetch content from ${url}: ${response.statusText}`);

  const text = await response.text();

  return text;
}
