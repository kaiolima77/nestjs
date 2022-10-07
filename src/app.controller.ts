import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/olamundo')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bsm')
  getBSM(): string {
    return this.appService.getBSM();
  }
  @Get('/objetivos')
  getObjetivos(): string {
    return this.appService.getObjetivos();
  }
}
