-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 11:35 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat2`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `groupname` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `groupname`) VALUES
(1, 'grupa1'),
(2, 'grupa2');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `grouponusers`
--

CREATE TABLE `grouponusers` (
  `userId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `grouponusers`
--

INSERT INTO `grouponusers` (`userId`, `groupId`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `message` varchar(191) NOT NULL,
  `authorId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `createdAt`, `message`, `authorId`, `groupId`) VALUES
(1, '2024-02-25 21:05:00.555', 'test test', 1, 1),
(2, '2024-02-25 21:06:19.301', 'test test', 2, 1),
(3, '2024-02-25 22:14:24.239', 'test test', 2, 1),
(4, '2024-02-26 22:37:52.332', 'test test', 2, 2),
(5, '2024-02-26 23:13:45.067', 'asd', 1, 2),
(6, '2024-02-26 23:14:26.491', 'ddd', 1, 2),
(7, '2024-02-26 23:14:32.244', 'ddda', 1, 1),
(8, '2024-02-26 23:14:45.625', 'dddaas', 1, 1),
(9, '2024-02-26 23:15:01.696', 'sad', 1, 1),
(10, '2024-02-26 23:15:04.868', 'sadsda', 1, 2),
(11, '2024-02-26 23:15:38.829', 'asd', 2, 1),
(12, '2024-02-26 23:15:41.663', 'asdasd', 2, 2),
(13, '2024-02-27 20:57:31.613', 'asda', 1, 1),
(14, '2024-02-27 20:57:34.611', 'asdaasd', 1, 1),
(15, '2024-02-27 20:57:38.272', 'asdaasdasd', 1, 2),
(16, '2024-02-27 20:58:15.953', 'asd', 1, 1),
(17, '2024-02-27 20:58:22.351', 'asdaasdasdasd', 1, 1),
(18, '2024-02-27 22:06:28.597', 'asdasd', 1, 2),
(19, '2024-02-27 22:06:31.492', 'asdasd', 1, 2),
(20, '2024-02-27 22:06:33.569', 'asdasddd', 1, 2),
(21, '2024-02-27 22:07:13.402', 'asd', 2, 1),
(22, '2024-02-27 22:07:15.832', 'asdasdddasd', 1, 2),
(23, '2024-02-27 22:07:18.262', 'asdasdddasddsa', 1, 2),
(24, '2024-02-27 22:07:21.960', 'asdasd', 2, 1),
(25, '2024-02-27 22:07:32.910', 'asdasdddasddsadd', 1, 1),
(26, '2024-02-27 22:07:35.956', 'asdasdasd', 2, 1),
(27, '2024-02-27 22:08:57.513', 'aa', 1, 1),
(28, '2024-02-27 22:09:02.920', 'aaaa', 1, 2),
(29, '2024-02-27 22:14:49.056', 'aa', 1, 1),
(30, '2024-02-27 22:14:56.286', 'aaaa', 1, 2),
(31, '2024-02-27 22:15:49.552', 'asd', 1, 1),
(32, '2024-02-27 22:15:54.029', 'asd', 1, 2),
(33, '2024-02-27 22:15:58.133', 'asdasd', 1, 1),
(34, '2024-02-27 22:15:59.489', 'asdasd', 1, 1),
(35, '2024-02-27 22:16:01.627', 'asd', 1, 1),
(36, '2024-02-27 22:17:26.552', 'asdasd', 1, 1),
(37, '2024-02-27 22:17:34.388', 'asdasd', 1, 2),
(38, '2024-02-27 22:19:35.365', 'aa', 1, 1),
(39, '2024-02-27 22:34:10.739', 'asd', 1, 1),
(40, '2024-02-27 22:34:14.848', 'asd', 1, 1),
(41, '2024-02-27 22:34:18.501', 'asd', 1, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'login1', 'a'),
(2, 'login11', 'a'),
(3, 'login11', 'passwd2sad222'),
(4, 'login1', 'passwd2sad222');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0d80bf34-887f-4564-a09b-98d255d87219', '6e1617545089ff2ecabcb777208fba7beb1b53e9091c62692f3db06f21889912', '2024-02-25 20:35:59.391', '20240225203558_aaaaa', NULL, NULL, '2024-02-25 20:35:58.435', 1),
('660206c2-1dc7-4497-ad97-3a4ae2121c36', '77fcb3a88595ddc6f02a9adba489a07f58ac61bf41e64906ec4f6d91f5fc2388', '2024-02-25 20:35:49.570', '20240224215213_aaaa', NULL, NULL, '2024-02-25 20:35:49.532', 1),
('8b4f155f-6071-4c89-8d07-627430659b8f', 'f6a545b89ffbfa90ee16acfa8c327efe9d15ce57a69d0390f0bb714085d44105', '2024-02-25 20:35:49.454', '20240224214341_aa', NULL, NULL, '2024-02-25 20:35:48.593', 1),
('bc0e55b2-8854-4130-9ca8-3edc2a5c449d', '14652a6a0f2c6b1e0e484e1659b77791ca58704aa2bd2cb40521fd473f8ea436', '2024-02-25 20:35:49.526', '20240224214929_aaa', NULL, NULL, '2024-02-25 20:35:49.460', 1),
('d08630e4-ff2f-4f2e-a9bc-a14b17f491af', '76fcf562bde5623ca99b3ef0c2f41ef8d226917b6e14c3aa3006c9ed30c5f93d', '2024-02-25 20:35:48.583', '20240224213938_a', NULL, NULL, '2024-02-25 20:35:47.869', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Group_groupname_key` (`groupname`);

--
-- Indeksy dla tabeli `grouponusers`
--
ALTER TABLE `grouponusers`
  ADD PRIMARY KEY (`userId`,`groupId`),
  ADD KEY `GroupOnUsers_groupId_fkey` (`groupId`);

--
-- Indeksy dla tabeli `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Post_authorId_fkey` (`authorId`),
  ADD KEY `Post_groupId_fkey` (`groupId`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grouponusers`
--
ALTER TABLE `grouponusers`
  ADD CONSTRAINT `GroupOnUsers_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `group` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `GroupOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `group` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
