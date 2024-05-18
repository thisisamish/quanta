-- CreateEnum
CREATE TYPE "Post" AS ENUM ('GENERAL_SECRETARY', 'VICE_PRESIDENT', 'CTC', 'DESIGN_HEAD', 'MANAGEMENT_HEAD', 'TECHNICAL_HEAD', 'FINANCE_HEAD', 'WEB_HEAD');

-- CreateTable
CREATE TABLE "Member" (
    "quantaId" VARCHAR(5) NOT NULL,
    "rollNo" CHAR(13) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" CHAR(10) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "gradYear" SMALLINT NOT NULL,
    "quantaJoiningYear" SMALLINT NOT NULL,
    "profilePic" VARCHAR(2083) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("quantaId")
);

-- CreateTable
CREATE TABLE "PostHolder" (
    "quantaId" VARCHAR(5) NOT NULL,
    "post" "Post" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostHolder_pkey" PRIMARY KEY ("quantaId")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "quantaId" VARCHAR(5) NOT NULL,
    "linktree" VARCHAR(50),
    "peerlist" VARCHAR(50),
    "instagram" VARCHAR(50),
    "twitter" VARCHAR(50),
    "linkedin" VARCHAR(50) NOT NULL,
    "github" VARCHAR(50),
    "dribble" VARCHAR(50),
    "behance" VARCHAR(50),
    "personalWebsite" VARCHAR(100),
    "blog" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("quantaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_rollNo_key" ON "Member"("rollNo");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_username_key" ON "Member"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Member_profilePic_key" ON "Member"("profilePic");

-- AddForeignKey
ALTER TABLE "PostHolder" ADD CONSTRAINT "PostHolder_quantaId_fkey" FOREIGN KEY ("quantaId") REFERENCES "Member"("quantaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_quantaId_fkey" FOREIGN KEY ("quantaId") REFERENCES "Member"("quantaId") ON DELETE RESTRICT ON UPDATE CASCADE;
