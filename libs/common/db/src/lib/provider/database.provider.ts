import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Role } from '../entities/role.entity';

const dataSource = {
  provide: 'DATA_SOURCE',
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    console.log(config.get<string>('DATABASE_URL'));
    console.log(__dirname + '/entities/*.entity{.ts,.js}');
    const dataSource = new DataSource({
      type: 'postgres',
      url: config.get<string>('DATABASE_URL'),
      entities: [Role],
      synchronize: true,
      logging: true,
    });

    return dataSource.initialize();
  },
};

export default dataSource;
