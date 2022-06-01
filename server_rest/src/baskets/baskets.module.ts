import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';

@Module({
  providers: [BasketsService],
})
export class BasketsModule {}
