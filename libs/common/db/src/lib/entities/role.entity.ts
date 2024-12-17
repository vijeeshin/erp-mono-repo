import { Column, Entity, PrimaryColumn } from 'typeorm';
import { AppEntity } from '../common/base.entity';

@Entity()
export class Role extends AppEntity {
  @Column({ name: 'role_id', unique: true })
  role: string | undefined;
}
