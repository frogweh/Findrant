import express, { Request, Response } from 'express';
import { test } from "./greeter.js";
        
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  //res.send('Hello, world!');
  res.send(test);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});