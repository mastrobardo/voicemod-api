import { Test, TestingModule } from '@nestjs/testing';
import { SoundController } from './sound.controller';
import { SoundService } from './sound.service';
import { CreateSoundDto, UpdateSoundDto } from './create-sound.dto';

describe("NoteController Unit Tests", () => {
  let soundController: SoundController;
  let spyService: SoundService;
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: SoundService,
      useFactory: () => ({
        create: jest.fn(() => []),
        findAll: jest.fn(() => []),
        findOne: jest.fn(() => { }),
        update: jest.fn(() => { }),
        delete: jest.fn(() => { })
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SoundController],
      providers: [SoundService, ApiServiceProvider],
    }).compile();

    soundController = app.get<SoundController>(SoundController);
    spyService = app.get<SoundService>(SoundService);
  })

  it("calling create method", async () => {
    const dto = 
        {
            name: 'a',
            icon: 'a.png',
            price: 0,
            playbacks: 0
        } as CreateSoundDto;
    await soundController.create(dto);
    expect(spyService.create).toHaveBeenCalled();

  })

  it("calling get all sounds method", () => {
    soundController.index();
    expect(spyService.findAll).toHaveBeenCalled();
  })

  it("calling find by id method", () => {
      try {
        soundController.find('anId');
      } catch(error) {

      }
    expect(spyService.findOne).toHaveBeenCalled();
  })

});