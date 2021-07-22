import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class post1626917530285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "jokes",
            columns: [
                {
                    name: "id",
                    type: "INTEGER",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                }, {
                    name: "joke",
                    type: "TEXT"
                }, {
                    name: "user_id",
                    type: "INTEGER"
                }, {
                    name: "date",
                    type: 'DATE'
                }
            ],
            foreignKeys: [
                {
                    name: 'users',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('jokes')
    }

}
