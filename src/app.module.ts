import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { MONGO_DB_CONNECTION_STRING } from './database/constants';

@Module({
  imports: [DatabaseModule, MongooseModule.forRoot(MONGO_DB_CONNECTION_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
