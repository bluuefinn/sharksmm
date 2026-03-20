const SUPABASE_URL = "https://hlxndxcyngylqjamqwxh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhseG5keGN5bmd5bHFqYW1xd3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDMyNDUsImV4cCI6MjA4OTU3OTI0NX0.TzLWBl43-6Xworz_tdE4jmaJK5YJcGEc9Pa0kl2LS5Q";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  };

  try {
    if (req.method === 'GET') {
      // Load data
      const r = await fetch(`${SUPABASE_URL}/rest/v1/store_data?id=eq.main&select=*`, { headers });
      if (!r.ok) throw new Error(`Supabase GET error: ${r.status}`);
      const rows = await r.json();
      if (!rows.length) return res.status(200).json({ success: true, data: null });
      return res.status(200).json({ success: true, data: rows[0] });
    }

    if (req.method === 'POST') {
      // Save data
      const body = req.body;
      const r = await fetch(`${SUPABASE_URL}/rest/v1/store_data?id=eq.main`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ ...body, updated_at: new Date().toISOString() })
      });
      if (!r.ok) {
        const err = await r.text();
        throw new Error(`Supabase PATCH error: ${r.status} — ${err}`);
      }
      return res.status(200).json({ success: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}
