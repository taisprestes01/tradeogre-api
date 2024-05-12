import { createApp } from './app';
import './index.ts';
const app = createApp()
const port =  process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});