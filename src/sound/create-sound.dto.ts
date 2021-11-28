import { BaseSoundDto } from "./base.dto";

export class CreateSoundDto extends BaseSoundDto {
    icon: string;
    name: string; 
    price: number;
    playbacks: number;
}

export class UpdateSoundDto extends BaseSoundDto {
  id: string;
  playbacks: number;
  price: number;
}
