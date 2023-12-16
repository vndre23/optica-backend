import express, {Express} from 'express';
import { routerApi } from './router';
import {connection} from './Drivers/DB/MongoDB/config';
import cors from 'cors';
const PORT=process.env.PORT || 3001;
export const server = () =>{
    
    const app:Express = express();
    app.use(cors());
    app.use(express.json());
    routerApi(app);
    app.listen(PORT,()=>{
    console.log(`ejecutando en el puertoo: ${PORT}`);
    });
    connection();
}
