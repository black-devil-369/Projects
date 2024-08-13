import {Router,Response,Request} from 'express';

const router = Router();

router.get('/',(req:Request, res:Response)=>{
    res.send("<h1>Successfully Creating Master_Api usine express<h1>");
})

export default router;