import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1626889680513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'VARCHAR'
                },
                {
                    name: 'login',
                    type: 'VARCHAR'
                },
                {
                    name: 'password',
                    type: 'VARCHAR'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('users')
    }

}
