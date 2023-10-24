-- CreateTable
CREATE TABLE `Member` (
    `memberId` CHAR(13) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` CHAR(10) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `gradYear` YEAR NOT NULL,
    `quantaJoiningYear` YEAR NOT NULL,
    `profilePic` VARCHAR(2083) NOT NULL,
    `designation` ENUM('TECHNICAL_TEAM_MEMBER', 'DESIGN_TEAM_MEMBER', 'WEB_TEAM_MEMBER') NOT NULL,

    UNIQUE INDEX `Member_email_key`(`email`),
    UNIQUE INDEX `Member_username_key`(`username`),
    PRIMARY KEY (`memberId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostHolder` (
    `memberId` CHAR(13) NOT NULL,
    `gradYear` YEAR NOT NULL,
    `post` ENUM('GENERAL_SECRETARY', 'VICE_PRESIDENT', 'CTC', 'DESIGN_HEAD', 'MANAGEMENT_HEAD', 'TECHNICAL_HEAD', 'FINANCE_HEAD', 'WEB_HEAD') NOT NULL,

    UNIQUE INDEX `PostHolder_memberId_key`(`memberId`),
    UNIQUE INDEX `PostHolder_gradYear_post_key`(`gradYear`, `post`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SocialLink` (
    `memberId` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(50) NOT NULL,
    `linkedin` VARCHAR(50) NOT NULL,
    `github` VARCHAR(50) NOT NULL,
    `dribble` VARCHAR(50) NOT NULL,
    `behance` VARCHAR(50) NOT NULL,
    `personalWebsite` VARCHAR(50) NOT NULL,
    `blog` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `SocialLink_memberId_key`(`memberId`),
    UNIQUE INDEX `SocialLink_instagram_key`(`instagram`),
    UNIQUE INDEX `SocialLink_linkedin_key`(`linkedin`),
    UNIQUE INDEX `SocialLink_github_key`(`github`),
    UNIQUE INDEX `SocialLink_dribble_key`(`dribble`),
    UNIQUE INDEX `SocialLink_behance_key`(`behance`),
    UNIQUE INDEX `SocialLink_personalWebsite_key`(`personalWebsite`),
    UNIQUE INDEX `SocialLink_blog_key`(`blog`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PostHolder` ADD CONSTRAINT `PostHolder_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`memberId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocialLink` ADD CONSTRAINT `SocialLink_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`memberId`) ON DELETE RESTRICT ON UPDATE CASCADE;
