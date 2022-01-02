import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
const TABLE_NAME = 'cards';

export class createCards1624007615227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: 'token',
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
            name: 'pan',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cvv',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'expiresAt',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'tinyint',
            isNullable: false,
          },
          {
            name: 'allowedMccs',
            type: 'varchar',
            isNullable: true,
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
    const gpaFK = table.foreignKeys.find(fk => fk.columnNames.indexOf('gpaId') !== -1);
    await queryRunner.dropForeignKeys(TABLE_NAME, [gpaFK]);
    await queryRunner.dropTable(TABLE_NAME);
  }
}
