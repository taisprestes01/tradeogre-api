import express from 'express';
import  router  from './routes';
function createApp() {
    const app = express();
 
    app.use(express.json());

    app.get('/api', router );

    return app;
}

export default createApp;