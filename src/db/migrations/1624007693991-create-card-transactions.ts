import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const TABLE_NAME = 'card_transactions';

export class createCardTransactions1624007693991 implements MigrationInterface {
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
            name: 'merchantId',
            type: 'varchar',
            isNullable: false,
            isUnique: false,
          },
          {
            name: 'cardToken',
            type: 'varchar',
            isNullable: false,
            isUnique: false,
          },
          {
            name: 'amount',
            type: 'decimal',
            isNullable: false,
            isUnique: false,
            precision: 6,
            scale: 2,
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
        columnNames: ['merchantId'],
        referencedTableName: 'merchants',
        referencedColumnNames: ['id'],
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['cardToken'],
        referencedTableName: 'cards',
        referencedColumnNames: ['token'],
      }),
    );
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(TABLE_NAME);
    const merchantFK = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('mercahntId') !== -1,
    );
    const cardFK = table.foreignKeys.find(
        fk => fk.columnNames.indexOf('cardToken') !== -1,
      );
    await queryRunner.dropForeignKeys(TABLE_NAME, [cardFK,merchantFK]);
    await queryRunner.dropTable(TABLE_NAME);
  }
}
