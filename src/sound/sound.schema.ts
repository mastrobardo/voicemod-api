import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SoundDocument = Sound & Document;

@Schema()
export class Sound {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  playbacks?: number;
}

export const SoundSchema = SchemaFactory.createForClass(Sound);