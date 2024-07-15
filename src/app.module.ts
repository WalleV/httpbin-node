import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MethodsModule } from './modules/methods/methods.module';

@Module({
  imports: [MethodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
