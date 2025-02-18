// Backend (Node.js & Express) - Module Based
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.json({ error: 'Name is required.' });
    }
    res.json({ message:` Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});