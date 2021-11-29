import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SoundDocument = Sound & Document;

@Schema()
export class Sound {

  //id is coming from mongo entries
  
  @ApiProperty({ required: true })
  @Prop({ required: true })
  name: string;
  
  @ApiProperty({ required: true })
  @Prop({ required: true })
  icon: string;

  @ApiProperty({ required: false })
  @Prop()
  price?: number;

  @ApiProperty({ required: false })
  @Prop()
  playbacks?: number;
}

export const SoundSchema = SchemaFactory.createForClass(Sound);