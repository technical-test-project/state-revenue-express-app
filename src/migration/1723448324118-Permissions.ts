import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Permissions1723448324118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "permissions", columns: [{
                name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment'
            }, {
                name: "name", type: "varchar", length: '255', isUnique: true, isNullable: false
            },  {
                name: "createdAt", type: "timestamp", default: 'CURRENT_TIMESTAMP'
            }, {
                name: "updatedAt", type: "timestamp", default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
