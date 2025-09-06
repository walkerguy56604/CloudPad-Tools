export default async function handler(req) {
  // read a value from the KV JSON
  const kv = await fetch('https://raw.githubusercontent.com/YOURUSERNAME/CloudPad/main/data-kv.json')
    .then(res => res.json())
    .catch(() => ({}));

  const value = kv['test-key'] || 'default';
  return new Response(`KV value: ${value}`);
}
