import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  getInitialize() {
    return 'COSIEK';
  }
}
