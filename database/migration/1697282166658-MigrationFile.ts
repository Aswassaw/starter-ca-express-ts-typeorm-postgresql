import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationFile1697282166658 implements MigrationInterface {
  name = "MigrationFile1697282166658";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" uuid NOT NULL, "book_name" character varying(50) NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
