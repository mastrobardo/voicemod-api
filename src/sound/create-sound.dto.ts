// todo/dto/create-todo.dto.ts
import { BaseSoundDto } from "./base.dto";

export class CreateSoundDto extends BaseSoundDto {
    id: number;
    icon: string;
    name: string; 
    price: number;
}

export class UpdateSoundDto extends BaseSoundDto {
  playback: number;
}
