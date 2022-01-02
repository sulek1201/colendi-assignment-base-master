import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const TABLE_NAME = 'users';

export class createUsers1624006762759 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'gpaId',
            type: 'varchar',
            isNullable: false,
            isUnique: false,
          },
          {
            name: 'firstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lastName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'nationalId',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },  
          {
            name: 'phoneNumber',
            type: 'varchar',
            isNullable: false,
          },  
          {
            name: 'isVerified',
            type: 'bool',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['gpaId'],
        referencedTableName: 'gpas',
        referencedColumnNames: ['id'],
      }),
    );
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(TABLE_NAME);
    const gpaFK = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('gpaId') !== -1,
    );
    await queryRunner.dropForeignKeys(TABLE_NAME, [gpaFK]);
    await queryRunner.dropTable(TABLE_NAME);
  }
}
