import { Module } from "@nestjs/common";
import { CollectionsController } from "./collections.controller";
import { CollectionsService } from "./collections.service";

@Module({
  imports: [],
  providers: [CollectionsService],
  controllers: [CollectionsController],
})
export class CollectionsModule {}
