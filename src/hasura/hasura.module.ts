import { Module } from '@nestjs/common';
import { HasuraService } from './hasura.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, HasuraService],
  exports: [HasuraService],
})
export class HasuraModule {
}
