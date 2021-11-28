import { Module } from '@nestjs/common';
import { SoundService } from './sound.service';
import { SoundController } from './sound.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sound, SoundSchema } from './sound.schema';

@Module({
  providers: [SoundService],
  controllers: [SoundController],
  imports: [
    MongooseModule.forFeature([{ name: Sound.name, schema: SoundSchema }]),
  ],
})
export class SoundModule {}
