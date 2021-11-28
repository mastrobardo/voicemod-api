import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateSoundDto, UpdateSoundDto } from './create-sound.dto';
  import { Sound } from './sound.schema';
  import { SoundService } from './sound.service';

  
  @Controller('sounds')
  export class SoundController {
    constructor(private readonly service: SoundService) {}
  
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() createSoundDto: CreateSoundDto) {
      createSoundDto.playbacks = 0;
      return await this.service.create(createSoundDto);
    }
  
    @Put(':id/play')
    async update(@Param('id') id: string, @Body() updateSoundDto: UpdateSoundDto) {
      const sound: Sound = this.service.findOne(id) as unknown as Sound;
      const playbacks: number = (await sound).playbacks + 1;
      updateSoundDto.playbacks = playbacks;
      updateSoundDto.price = playbacks * 0.01;
      return await this.service.update(id, updateSoundDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }
  