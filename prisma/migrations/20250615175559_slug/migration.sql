/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `tests` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tests_slug_key" ON "tests"("slug");
