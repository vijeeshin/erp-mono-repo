import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { createId } from '@paralleldrive/cuid2';

@Entity()
export class AppEntity {
  @PrimaryColumn('varchar')
  id = createId();

  @CreateDateColumn()
  created_at: Date | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;

  @DeleteDateColumn()
  deletedAt!: Date | null;
}
