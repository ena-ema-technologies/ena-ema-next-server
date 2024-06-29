import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ['https://www.enaema.com'],
    // origin: ['https://ena-ema-next-client.vercel.app'],
    credentials: true,
  }),
);

// app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
