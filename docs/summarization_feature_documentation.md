# 📚 Game Description Summarization Feature

## 🔍 Overview
This feature allows users to generate a short summary of long game descriptions using the Hugging Face model `facebook/bart-large-cnn`.

---

## 🤖 Hugging Face Model
- **Model:** facebook/bart-large-cnn
- **Purpose:** Summarizes lengthy game descriptions into quick-read versions.
- **Reason for Choice:** High accuracy, widely supported, and easy to implement via Hugging Face's Inference API.

---

## 🔧 API Route

| Route | Method | Parameters | Description |
|-------|--------|------------|-------------|
| `/api/summarize` | POST | `{ "description": "long game description" }` | Returns a summary of the game description |

**Request Example:**
```json
POST /api/summarize
{
  "description": "Elden Ring is a fantasy action RPG..."
}
```

**Response Example:**
```json
{
  "summary": "Elden Ring is a fantasy action RPG with open-world exploration."
}
```

---

## 🎨 UI Wireframe
```
+-----------------------------+
| Game Title                 |
| Long Description...        |
|                            |
| [ Summarize Description ]  |
| -> Shows: "Quick summary." |
+-----------------------------+
```

---

## 🧱 Tasks Breakdown

| Task | Assignee | Status |
|------|----------|--------|
| Create /api/summarize endpoint | Dev A | ✅ |
| Add summarization button to UI | Dev B | 🔄 In Progress |
| Update README & Docs | Dev C | 🔲 Not Started |
| Project board setup | Dev C | ✅ |

---

## 🧪 Local Testing Instructions

1. Clone the repo and install dependencies:
```bash
git clone https://github.com/yourusername/Video_game_library.git
cd Video_game_library
npm install
```

2. Add Hugging Face API key to your `.env` file:
```
HUGGINGFACE_API_KEY=your_key_here
```

3. Start your dev server:
```bash
npm run dev
```

---

## 📹 Demo Video Guidelines

Use OBS or Loom to:
- Show full description of a game
- Click "Summarize Description"
- Show the resulting short summary

---

## 📌 GitHub Setup

- Use **GitHub Projects** for tracking
- Break tasks into **issues**
- Link each **Pull Request** to an issue for clear traceability

---

## 🔗 Useful Links
- [Hugging Face Model](https://huggingface.co/facebook/bart-large-cnn)
- [Node Fetch](https://www.npmjs.com/package/node-fetch)