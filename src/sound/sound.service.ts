import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSoundDto, UpdateSoundDto } from './create-sound.dto';
import { Sound, SoundDocument } from './sound.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class SoundService {
  constructor(@InjectModel(Sound.name) private readonly model: Model<SoundDocument>) {}

  async findAll(): Promise<Sound[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Sound> {
    const _id = new mongoose.Types.ObjectId(id);
    return await this.model.findById(_id).exec();
  }

  async create(createSoundDto: CreateSoundDto): Promise<Sound> {
    return await new this.model({
      ...createSoundDto,
    }).save();
  }

  async update(id: string, updateSoundDto: UpdateSoundDto): Promise<Sound> {
    return await this.model.findByIdAndUpdate(id, updateSoundDto).exec();
  }

  async delete(id: string): Promise<Sound> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
