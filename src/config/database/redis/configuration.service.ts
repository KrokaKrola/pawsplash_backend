import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/*
 * Service dealing with redis config based operations.
 *
 * @class
 * */
@Injectable()
export class RedisConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('redis.port');
  }
}
