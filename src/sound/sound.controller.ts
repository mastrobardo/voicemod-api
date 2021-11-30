import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateSoundDto, UpdateSoundDto } from './create-sound.dto';
import { Sound } from './sound.schema';
import { SoundService } from './sound.service';
import { ApiBody,
         ApiBadRequestResponse, 
         ApiInternalServerErrorResponse, 
         ApiNotFoundResponse, 
         ApiOkResponse, 
         ApiTags, 
         ApiCreatedResponse} from '@nestjs/swagger';

@ApiTags('sounds')
@Controller('sounds')
export class SoundController {
  constructor(private readonly service: SoundService) {}

  @ApiOkResponse({
    description: 'Returns the whole list of sounds',
    type: [Array]
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get()
  @Header('content-type', 'application/json')
  @Header('cache-control', 'no-cache')
  async index() {
    return await this.service.findAll();
  }

  @ApiOkResponse({
    description: 'Returns a single sound',
    type: [Array]
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiNotFoundResponse({
    description: 'Sound is not found'
  })
  @ApiCreatedResponse({ type: Sound })
  @Get(':id')
  @Header('content-type', 'application/json')
  @Header('cache-control', 'no-cache')
  async find(@Param('id') id: string) {
    const result = await this.service.findOne(id);
    if (!result) {
      throw new HttpException('Found with this id was not found', HttpStatus.NOT_FOUND);
    }
    return result
  }

  @ApiOkResponse({
    description: 'Save a single sound in DB',
    type: [Sound]
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiBadRequestResponse({
    description: 'Some required params are missing',
  })
  @ApiBody({ type: Sound })
  @ApiCreatedResponse({ type: CreateSoundDto })
  @Post()
  @Header('content-type', 'application/json')
  async create(@Body() createSoundDto: CreateSoundDto) {
    if (!createSoundDto.name || !createSoundDto.icon) {
      throw new HttpException('Bad request, some required filed is missing', HttpStatus.BAD_REQUEST);
    }
    createSoundDto.playbacks = 0;
    createSoundDto.price = 0;
    return await this.service.create(createSoundDto);
  }

  @ApiOkResponse({
    description: 'Update single sound in DB',
    type: [Sound]
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiCreatedResponse({ type: UpdateSoundDto })
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
