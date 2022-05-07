import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { Collection } from "@prisma/client";
import { CollectionsService } from "./collections.service";
import { CreateCollectionInput } from "./dto/createPost.input";

@Controller("collections")
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get(":id")
  async getCollection(
    @Param("id") collectionId: string,
    @Query("raw") raw: boolean
  ): Promise<Collection | any> {
    const res = await this.collectionsService.getCollection({
      collectionId: collectionId,
    });
    console.log(res);
    // return raw ? JSON.parse(res.data) : res;
    return raw ? res.data : res;
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
