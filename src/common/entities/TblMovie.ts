import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tbl_movie', { schema: 'study' })
export class TblMovie {
  @PrimaryGeneratedColumn({ type: 'int', name: 'mv_id', unsigned: true })
  mvId: number;

  @Column('varchar', { name: 'mv_title', length: 50 })
  mvTitle: string;

  @Column('varchar', { name: 'mv_explain', length: 100 })
  mvExplain: string;

  @Column('varchar', { name: 'reg_id', length: 50 })
  regId: string;

  @Column('datetime', { name: 'reg_dt'})
  regDt: Date | null;

  @Column('varchar', { name: 'mod_id', nullable: true, length: 50 })
  modId: string;

  @Column('datetime', { name: 'mod_dt', nullable: true})
  modDt: Date | null;

}
