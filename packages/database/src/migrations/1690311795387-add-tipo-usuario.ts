import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTipoUsuario1690311795387 implements MigrationInterface {
    name = 'AddTipoUsuario1690311795387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "TipoUsuario" ("id" int NOT NULL IDENTITY(1,1), "cod" varchar(15) NOT NULL, "descripc" varchar(50) NOT NULL, CONSTRAINT "PK_a121c69f5395f005256fc6f35ec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "tipoUsuarioId" int`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_9abe91c1eadb4d15305c7581a7c" FOREIGN KEY ("tipoUsuarioId") REFERENCES "TipoUsuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_9abe91c1eadb4d15305c7581a7c"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "tipoUsuarioId"`);
        await queryRunner.query(`DROP TABLE "TipoUsuario"`);
    }

}
