import { env, envNum } from "@/helper/config";
import { registerAs } from "@nestjs/config";


export const app = registerAs('app',() => ({
   port:envNum('PORT',3000),
   globalPrefix:env('GlobalPrefix','')
}));

export type IAppConfig = ReturnType<typeof app>;