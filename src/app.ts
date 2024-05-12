import express from 'express';
import router from './routes';

const app = createApp()
export function createApp() {
    const app = express();
 
    app.use(express.json());

    app.use(router);
   
    return app;
}
export default createApp;