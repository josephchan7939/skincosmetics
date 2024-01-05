import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as config from '@/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UserModule } from './src/modules/user/user.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:[`.env.${process.env.NODE_ENV}.local`,
    `.env.${process.env.NODE_ENV}`,
    '.env.local',
    '.env'
  ],
  load:[...Object.values(config)]
  }),
  TypeOrmModule.forRootAsync({
    useFactory:(configService:ConfigService) => ({
      ...(configService.get<config.IDBConfig>('database')),
      type:'mysql',
      autoLoadEntities: true,
    }),
    inject:[ConfigService],
  }),
  UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
