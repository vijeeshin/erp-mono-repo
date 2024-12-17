import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule, Role } from '@erp/libs/common/db';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: Role,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
      inject: ['DATA_SOURCE'],
    },
    AppService,
  ],
})
export class AppModule {}
