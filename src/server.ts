import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

const PORT = 4003;

app.listen(PORT, () =>
  console.log(`🔥 Server is running at: http://localhost:${PORT}`)
);
