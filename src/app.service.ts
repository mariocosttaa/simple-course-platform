import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  appInfo(): object {
    return {
      version: '1.0.0',
      app: 'Simple Course',
    }
  }
}
