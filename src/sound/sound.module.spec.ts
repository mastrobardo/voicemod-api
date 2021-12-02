import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { UpdateSoundDto } from './create-sound.dto';
import { SoundController } from './sound.controller';
import { Sound, SoundDocument } from './sound.schema';
import { SoundService } from './sound.service';

const mockId= '55153a8014829a865bbf700d';

const mockSound: Sound = {
  name: 'a name',
  icon: 'anIcon',
  price: 0,
  playbacks: 0,
}

const soundMockRepository = {
  find: () => {
    return {exec: jest.fn(() => {return []})};
  },
  findById: (id: string) => {
    return {exec: jest.fn(() => {return mockSound})};
  },
  create: {
    save: jest.fn(() => {
      console.warn('mock called')
      return mockSound
    })
  },
  updfindByIdAndUpdateate: () => {
    return {exec: jest.fn(() => {return mockSound})};
  }
};

describe('SoundController', () => {
  let soundController: SoundController;
  let soundService: SoundService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [SoundController],
        providers: [SoundService,
        {
          provide: getModelToken(Sound.name),
          useValue: soundMockRepository
        }],
      }).compile();

    soundService = moduleRef.get<SoundService>(SoundService);
    soundController = moduleRef.get<SoundController>(SoundController);
  });

    describe('GET index', () => {
      it('should an array', async () => {
        const result: Sound[] = [];

        expect(await soundController.index()).toStrictEqual(result);
      });
    });

    describe('GET sounds/:id', () => {
      it('should return a single sound', async () => {
        const result: Sound = mockSound;

        expect(await soundController.find(mockId)).toBe(result);
      });
    });

    describe('POST sounds', () => {
      it('should save a sound', async () => {
        const result: Sound = mockSound;
        jest.spyOn(soundService, 'create').mockImplementation(async () => result);
        expect(await soundController.create(mockSound)).toBe(result);
      });
    });

    describe('PUT sounds/:id', () => {
      it('should update a sound', async () => {
        const dto: UpdateSoundDto =  {id: mockId, price: 0, playbacks: 0};
        const result = {...mockSound, price: 0.01, playbacks: 1};
        jest.spyOn(soundService, 'update').mockImplementation(async () => result);
        expect(await soundController.update(mockId, dto)).toBe(result);

      });
    });
});