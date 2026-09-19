import app from '@/app';
import {env} from '@/config/env';

const startTheServer = () =>{
    try{
        app.listen(env.PORT, () => {
            console.log(`[${env.NODE_ENV}] ${env.APP_NAME} is running on ${env.BACKEND_URL}`);
        })
    }
    catch(error){
        console.error("Couldn't start the engine: ",error);
        process.exit(1);
    }
}

startTheServer()