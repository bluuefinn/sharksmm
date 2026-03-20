# SharkSMM Store

A digital services storefront with admin panel + Shadow SMM Panel API integration.

## Project Structure

```
sharksmm/
├── index.html        ← Full storefront + admin panel
├── api/
│   └── services.js   ← Vercel serverless proxy (hides your API key)
├── vercel.json       ← Vercel deployment config
└── README.md
```

## Deploy to Vercel (Free)

### Step 1 — Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2 — Deploy
```bash
cd sharksmm
vercel
```
Follow the prompts:
- Set up a new project? **Yes**
- Project name: **sharksmm**
- Deploy: **Yes**

Your store will be live at: `https://sharksmm.vercel.app` (or similar)

### Step 3 — Sync API Services
1. Go to your live store URL
2. Click **⚙ Admin** (top right)
3. Password: **admin786**
4. Go to **Shadow SMM API** tab
5. Click **⟳ Sync Now**
6. All Shadow SMM services will appear — you can **Hide** any you don't want to show

---

## Admin Panel Features

### My Services tab
- Add, edit, delete your 35 manual services
- 20% markup applied automatically (invisible to customers)
- Prices shown in USD + PKR

### Categories tab  
- Add, edit, delete categories
- Each category has a color theme
- Deleting a category moves its services to "Other"

### Shadow SMM API tab
- Sync latest services from Shadow SMM Panel
- Toggle any service visible/hidden
- Your sell price = their price × 1.20 (20% markup)

---

## Admin Credentials
- Password: `admin786` — change in index.html line: `const ADMIN_PASS = "admin786"`

## API Key
- Shadow SMM key is in `api/services.js` — never visible to users

## Contact Number
- WhatsApp: `+923228033682` — change in index.html line: `const CONTACT = "+923228033682"`
