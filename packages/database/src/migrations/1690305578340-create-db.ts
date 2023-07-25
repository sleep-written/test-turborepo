import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1690305578340 implements MigrationInterface {
    name = 'CreateDb1690305578340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Usuario" ("id" int NOT NULL IDENTITY(1,1), "nick" varchar(20) NOT NULL, "pass" varchar(64) NOT NULL, CONSTRAINT "PK_925c3fc5494373e254405c000eb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Usuario"`);
    }
}
