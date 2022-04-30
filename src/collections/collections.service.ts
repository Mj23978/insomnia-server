import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma/dist/prisma.service";
import { Collection, Prisma } from "@prisma/client";

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async getCollection(
    collectionWhereInput: Prisma.CollectionWhereInput
  ): Promise<Collection | null> {
    return this.prisma.collection.findFirst({
      where: collectionWhereInput,
    });
  }

  async createCollection(
    data: Prisma.CollectionCreateInput
  ): Promise<Collection> {
    return this.prisma.collection.create({
      data,
    });
  }

  async updateCollection(params: {
    where: Prisma.CollectionWhereUniqueInput;
    data: Prisma.CollectionUpdateInput;
  }): Promise<Collection> {
    const { where, data } = params;
    return this.prisma.collection.update({
      data,
      where,
    });
  }

  async deleteCollection(
    where: Prisma.CollectionWhereUniqueInput
  ): Promise<Collection> {
    return this.prisma.collection.delete({
      where,
    });
  }
}
