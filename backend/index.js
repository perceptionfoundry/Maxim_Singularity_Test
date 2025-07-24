const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello Maxim, Singularity from the backend API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 