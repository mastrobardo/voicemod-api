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
      return await this.service.create(createSoundDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Param('playback') playback: number, @Param('price') price: number,@Body() updateSoundDto: UpdateSoundDto) {
      return await this.service.update(id, updateSoundDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }
  