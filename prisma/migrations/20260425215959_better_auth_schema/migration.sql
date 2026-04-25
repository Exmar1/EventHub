-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "userAgent" TEXT,
ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
