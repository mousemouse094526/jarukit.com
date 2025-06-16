/*
  Warnings:

  - You are about to drop the column `slug` on the `tests` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "tests_slug_key";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "slug";
