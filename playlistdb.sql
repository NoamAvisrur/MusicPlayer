-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2017 at 01:30 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playlistdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(1, 'Old Dance Songs', '\'http://www.newlyswissed.com/wp-content/uploads/2017/04/Montreux-Jazz-Festival-2017_social.jpg\'', '[{\r\n	\"name\": \"Dance Dance Dance\",\r\n	\"url\": \"http://open-all.co/songsforprj/%20Dance.mp3\"\r\n}, {\r\n	\"name\": \"All that she wants\",\r\n	\"url\": \"http://open-all.co/songsforprj/All%20That%20She%20Wants.mp3\"\r\n}, {\r\n	\"name\": \"Im a barbie girl\",\r\n	\"url\": \"http://open-all.co/songsforprj/Aqua%20-%20Im%20a%20barbie%20girl.mp3\"\r\n}, {\r\n	\"name\": \"More than friends\",\r\n	\"url\": \"http://open-all.co/songsforprj/More%20Than%20Friends%20(feat.%20Daddy%20Yanke).mp3\"\r\n}, {\r\n	\"name\": \"I saw the sign\",\r\n	\"url\": \"http://open-all.co/songsforprj/I%20Saw%20The%20Sign.mp3\"\r\n}, {\r\n	\"name\": \"Cruel summer\",\r\n	\"url\": \"http://open-all.co/songsforprj/cruel%20summer.mp3\"\r\n}, {\r\n	\"name\": \"La La love\",\r\n	\"url\": \"http://open-all.co/songsforprj/Ivi%20Adamou%20-%20La%20La%20Love.mp3\"\r\n}, {\r\n	\"name\": \"Crazy love\",\r\n	\"url\": \"http://open-all.co/songsforprj/Crazy%20love%20-%20Mara%20Ft%20Beto.mp3\"\r\n}]'),
(2, 'Coldplay X&Y', 'https://c1.staticflickr.com/5/4098/4773364303_6b9a486ecd.jpg', '[{\r\n	\"name\": \"Sparks\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nOERScC1JT0kxc1U\"\r\n}, {\r\n	\"name\": \"Dont panic\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nSm0tbUxaYlB4ME0\"\r\n}, {\r\n	\"name\": \"Shiver\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nZFdZNDdYOTBlMEE\"\r\n}, {\r\n	\"name\": \"The hardest part\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nVDhzZ1BDangxQkU\"\r\n}, {\r\n	\"name\": \"The Scientist\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1na1RETmF4b2VvWUk\"\r\n}, {\r\n	\"name\": \"Warning sign\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nTFRxWUFrSlB2NEU\"\r\n}, {\r\n	\"name\": \"In my place\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nV2hmclAwa2hVU0U\"\r\n}, {\r\n	\"name\": \"Fix you\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nblpMam1RT19kbTQ\"\r\n}]'),
(3, 'Pink Floyd\'s Best', 'https://albumoriented.files.wordpress.com/2013/03/153-true-poetry-01.jpg', '[{\r\n	\"name\": \"Wish you were here\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nenZUOTBua1JyMk0\"\r\n}, {\r\n	\"name\": \"Hey you\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nVjJHdGhieWtpcU0\"\r\n}, {\r\n	\"name\": \"We dont need no aducation\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nN2lQS1NVOGtwLXc\"\r\n}, {\r\n	\"name\": \"Money\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nVUp6NVFTZUNRSGc\"\r\n}, {\r\n	\"name\": \"Burn\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nb0hKc1BnQmp2MlE\"\r\n}]'),
(4, 'Frank Sinatra ', 'https://i.scdn.co/image/6c815ce2d920f7b9fe8c5ced8de3fbb92086d5ec', '[{\r\n	\"name\": \"All of me\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nUjVYV2xmZDZJbGM\"\r\n}, {\r\n	\"name\": \"Fly me to the moon\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nWnZnNUZmZnVYTlk\"\r\n}, {\r\n	\"name\": \"I love paris\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nUWVfOFNWYmtETmc\"\r\n}, {\r\n	\"name\": \"They cant take that from me\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nRDBzRGtyV24yRUk\"\r\n}, {\r\n	\"name\": \"Come dance with me\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nQUd0MHc1UmpTOFk\"\r\n}, {\r\n	\"name\": \"Love is here to stay\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1naWtwNE9fVXZjSmM\"\r\n}, {\r\n	\"name\": \"All the way\",\r\n	\"url\": \"https://drive.google.com/uc?export=download&id=0B4Ln3eE2AH1nM28xRVQ0d1ZoN1k\"\r\n}]'),
(6, 'cool pop songs', 'https://s-media-cache-ak0.pinimg.com/736x/39/1e/bb/391ebbc19d157bb0d1a46ffef780cb0a--pop-art-design-bright-colours.jpg', '[{\"name\":\"everytime we touch\",\"url\":\"http:\\/\\/open-all.co\\/songsforprj\\/Cascada%20-%20Everytime%20We%20Touch%20(Slow).mp3\"},{\"name\":\"dance\",\"url\":\"http:\\/\\/open-all.co\\/songsforprj\\/Dance.mp3\"},{\"name\":\"cherry pop\",\"url\":\"http:\\/\\/open-all.co\\/songsforprj\\/Cherry%20Pop.mp3\"},{\"name\":\"chiki chiiki\",\"url\":\"http:\\/\\/open-all.co\\/songsforprj\\/Nikki%20Lee%20-%20Chiki%20Chiki.mp3\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
