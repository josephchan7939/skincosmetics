import { env, envBool, envNum } from "@/helper/config";
import { registerAs } from "@nestjs/config";


export const database = registerAs('database',() => ({
  // type:'mysql',
   host:env('DB_HOST','locahost'),
   port:envNum('DB_PORT',3306),
   database:env('DB_DATABASE',''),
   username:env('DB_USERNAME',''),
   password:env('DB_PASSWORD',''),
   synchronize:envBool('DB_SYNCHRONIZE',false)
}));

export type IDBConfig = ReturnType<typeof database>;