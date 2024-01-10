import { NestFactory, Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as config from '@/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/filter/allexception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());
  const configService = app.get(ConfigService);
  const { globalPrefix, port } = configService.get<config.IAppConfig>('app');
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
    //   transform:true,
     //  transformOptions: { enableImplicitConversion: true },
    }),
  )
  //const port = Number(configService.get<string>('PORT'));
 // console.log('port is ',port);
 // console.log(process.env['GlobalPrefix']);
//  console.log(...Object.values(config));
  
  await app.listen(port);
}
bootstrap();
