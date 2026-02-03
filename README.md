<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1vM_vmK7mAp95BN0wBNgwlAyKfk234qEG

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`

2. Configure API Key (Choose one):
   - **Option A (Recommended for quick start):** Run the app and click the "Settings" icon in the navbar to enter your Gemini API Key directly in the UI.
   - **Option B (Env file):** Create a `.env.local` file (copy from `.env.example`) and add your key: `GEMINI_API_KEY=your_key_here`

3. Run the app:
   `npm run dev`
