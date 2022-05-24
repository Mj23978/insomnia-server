import { Body, Controller, Get, Param, Put, Response } from "@nestjs/common";
import { Response as Res } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Response() res: Res): Res<any, any> {
    const r = this.appService.getHello();
    return res
      .set({ override: "true" })
      .status(405)
      .json({ data: [r] });
    // return res.set({ override: "false" }).json(r);
  }

  @Put()
  putHello(@Body() body, @Response() res: Res): Res<any, any> {
    console.log(body);
    return (
      res
        .set({ override: "false" })
        // .status(405)
        .json({ org: "intern_21" })
    );
    // return res.set({ override: "false" }).json(r);
  }

  @Get("hello/:name")
  getHelloName(@Param("name") name: string): string {
    return this.appService.getHelloName(name);
  }
}
