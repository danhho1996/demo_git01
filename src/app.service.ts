import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'https://docs.google.com/document/d/1MBCvHjOBP3veCPWUm8uAdHiJZ982smxa8fcvqc-lxqs/edit';
  }
}
