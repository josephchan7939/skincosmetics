import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as config from '@/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());
  const configService = app.get(ConfigService);
  const { globalPrefix, port } = configService.get<config.IAppConfig>('app');
  app.setGlobalPrefix(globalPrefix);
  //const port = Number(configService.get<string>('PORT'));
 // console.log('port is ',port);
 // console.log(process.env['GlobalPrefix']);
//  console.log(...Object.values(config));
  
  await app.listen(port);
}
bootstrap();
