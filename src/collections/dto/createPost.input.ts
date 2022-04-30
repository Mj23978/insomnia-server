import { IsNotEmpty } from "class-validator";

export class CreateCollectionInput {
  @IsNotEmpty()
  data: string;
}
