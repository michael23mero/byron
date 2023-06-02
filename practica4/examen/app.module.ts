import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamenModule } from './examen/examen.module';

@Module({
  imports: [ExamenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
