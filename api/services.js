export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const response = await fetch('https://shadowsmmpanel.com/api/v2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        key: '98d9e78f53a7e0ebb79b3445d6b9ac3e',
        action: 'services'
      })
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    res.status(200).json({ success: true, services: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
