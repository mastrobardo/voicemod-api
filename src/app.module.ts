import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { MONGO_DB_CONNECTION_STRING } from './database/constants';
import { SoundModule } from './sound/sound.module';

@Module({
  imports: [DatabaseModule, MongooseModule.forRoot(MONGO_DB_CONNECTION_STRING), SoundModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
