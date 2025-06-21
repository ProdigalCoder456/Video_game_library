import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/summarize', async (req, res) => {
  const { description } = req.body;

  const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
    method: 'POST',
    headers: {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: description }),
  });

  const data = await response.json();
  const summary = data[0]?.summary_text || 'Summary not available.';

  res.json({ summary });
});

export default router;