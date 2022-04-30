import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Collection } from "@prisma/client";
import { CollectionsService } from "./collections.service";
import { CreateCollectionInput } from "./dto/createPost.input";

@Controller("collections")
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get(":id")
  async getCollection(@Param("id") collectionId: string): Promise<Collection> {
    const res = await this.collectionsService.getCollection({
      collectionId: collectionId,
    });
    console.log(res);
    return res;
  }

  @Post()
  async createCollection(
    @Body() data: CreateCollectionInput
  ): Promise<Collection> {
    const res = await this.collectionsService.createCollection({
      data: data.data,
      name: data.name,
      collectionId: data.collectionId,
    });
    return res;
  }
}
