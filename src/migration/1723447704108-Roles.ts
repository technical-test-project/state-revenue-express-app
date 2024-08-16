import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Roles1723447704108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "roles", columns: [{
                name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment'
            }, {
                name: "username", type: "varchar", length: '100', isUnique: true, isNullable: false
            }, {
                name: "password", type: "varchar", length: '255', isNullable: false
            }, {
                name: "createdAt", type: "timestamp", default: 'CURRENT_TIMESTAMP'
            }, {
                name: "updatedAt", type: "timestamp", default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles')
    }

}
