import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Express Bank' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;