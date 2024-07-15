import { Module } from '@nestjs/common';
import { MethodsService } from './methods.service';
import { MethodsController } from './methods.controller';

@Module({
  providers: [MethodsService],
  controllers: [MethodsController]
})
export class MethodsModule {}
