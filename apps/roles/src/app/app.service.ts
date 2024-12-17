import { Role } from '@erp/libs/common/db';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject('DATA_SOURCE') private readonly dataSource: DataSource,
    @Inject(Role) private readonly roleRepo: Repository<Role>
  ) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
