import { BaseSoundDto } from "./base.dto";

export class CreateSoundDto extends BaseSoundDto {
    icon: string;
    name: string; 
    playbacks?: number;
    price?: number;
}

export class UpdateSoundDto extends BaseSoundDto {
  id: string;
  playbacks: number;
  price: number;
}
