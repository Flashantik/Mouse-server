const mongoose = require('mongoose');
const { environment } = require('../config/config');
import { filmSchema } from "./schema/filmSchema.js";
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

// mongoose.connect(environment[env].dbString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

console.log('start DB', environment[env].dbString)
mongoose
  .connect(environment[env].dbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    Films.insertMany([{
          name: 'Список Шиндлера',
          url: 'https://rezka.ag/films/biographical/823-spisok-shindlera-1993.html',
          image: 'f7a8fed2cada3bm26g73e.jpeg',
          tags: ["Биографические", "Военные", "Драмы", "Исторические", "Зарубежные"],
        },
        {
          name: 'Мальчик в полосатой пижаме',
          url: 'https://rezka.ag/films/drama/790-malchik-v-polosatoy-pizhame-2008.html',
          image: 'paa468e710f5erp65a62u.jpeg',
          tags: ["Драмы", "Военные", "Исторические", "Зарубежные"],
        },
        {
          name: 'Заводной апельсин',
          url: 'https://rezka.ag/films/fiction/3235-zavodnoy-apelsin-1971.html',
          image: 'h381721a47191hg92f78q.jpg',
          tags: ["Фантастика", "Драмы", "Триллеры", "Криминал", "Зарубежные"],
        },
        {
          name: 'Побег из Шоушенка',
          url: 'https://rezka.ag/films/drama/806-pobeg-iz-shoushenka-1994.html',
          image: 'o41759bd352dazn54q16d.jpeg',
          tags: ["Драмы", "Криминал", "Зарубежные"],
        },
        {
          name: 'Тайна Коко',
          url: 'https://rezka.ag/cartoons/fantasy/25701-tayna-koko-2017.html',
          image: 'q70940bd8998aqo17v93v.jpg',
          tags: ["Фэнтези", "Приключения", "Комедии", "Детективы", "Мюзиклы", "Семейные", "Полнометражные", "Зарубежные"],
        },
        {
          name: 'Матрица',
          url: 'https://rezka.ag/films/fiction/981-matrica-1999.html',
          image: 'h4442e483f19aey57g75d.jpg',
          tags: ["Фантастика", "Боевики", "Зарубежные"],
        },
        {
          name: 'Матрица 2 Перезагрузка',
          url: 'https://rezka.ag/films/fiction/982-matrica-perezagruzka-2003.html',
          image: 't89158308c819xl50u49k.jpg',
          tags: ["Фантастика", "Боевики", "Зарубежные"],
        },
        {
          name: 'Матрица 3 Революция',
          url: 'https://rezka.ag/films/fiction/983-matrica-revolyuciya-2003.html',
          image: 'da82d951c07abrh71s79g.jpg',
          tags: ["Фантастика", "Боевики", "Зарубежные"],
        },
        {
          name: 'Матрица 4 Воскрешение',
          url: 'https://rezka.ag/films/fiction/41910-matrica-voskreshenie-2021.html',
          image: 'k698641f71a51cq30b11s.jpg',
          tags: ["Фантастика", "Боевики", "Зарубежные"],
        },
        {
          name: 'Один дома',
          url: 'https://rezka.ag/films/comedy/833-odin-doma-1990.html',
          image: 'xb5614ffe43dbzm54q83f.jpeg',
          tags: ["Комедии", "Семейные", "Зарубежные"],
        },
        {
          name: 'Один дома 2: Затерянный в Нью-Йорке',
          url: 'https://rezka.ag/films/comedy/836-odin-doma-2-zateryannyy-v-nyu-yorke-1992.html',
          image: 'ac6dff2a815bfni53p38j.jpeg',
          tags: ["Комедии", "Семейные", "Зарубежные"],
        },
        {
          name: 'Престиж',
          url: 'https://rezka.ag/films/drama/795-prestizh-2006.html',
          image: 'g5282eb49ebc3aw27t29m.jpg',
          tags: ["Драмы", "Детективы", "Триллеры", "Зарубежные"],
        },
        {
          name: 'Молчание ягнят',
          url: 'https://rezka.ag/films/thriller/1170-molchanie-yagnyat-1991.html',
          image: 'fd539f56d14c7ls62h55d.jpeg',
          tags: ["Триллеры", "Криминал", "Детективы", "Ужасы", "Зарубежные"],
        },
        {
          name: 'Укрощение строптивого',
          url: 'https://rezka.ag/films/comedy/1174-ukroschenie-stroptivogo-1980.html',
          image: 'h4c009cecac33cm16l63a.jpeg',
          tags: ["Комедии", "Мелодрамы", "Зарубежные"],
        },
        {
          name: 'Шоу трумана',
          url: 'https://rezka.ag/films/drama/775-shou-trumana-1998.html',
          image: 'j6580c1f0e969gj32q93x.jpg',
          tags: ["Драмы", "Комедии", "Зарубежные"],
        },
        {
          name: 'Твое имя',
          url: 'https://rezka.ag/animation/romance/23603-tvoe-imya-2016.html',
          image: 'o48662e4bd360or42j80k.jpeg',
          tags: ["Романтические", "Драмы", "Мистические", "Аниме"],
        },
        {
          name: 'Ветер крепчает',
          url: 'https://rezka.ag/animation/drama/1269-veter-krepchaet-2013.html',
          image: 'v4aff9f388621uh18y23w.jpeg',
          tags: ["Драмы", "Военные", "Исторические", "Аниме"],
        },
        {
          name: 'Зверополис',
          url: 'https://rezka.ag/cartoons/comedy/11704-zveropolis-2016.html',
          image: 'z5efa104eec60zr19g11s.jpg',
          tags: ["Комедии", "Криминал", "Детективы", "Приключения", "Семейные", "Полнометражные", "Зарубежные"],
        },
        {
          name: 'Вверх',
          url: 'https://rezka.ag/cartoons/comedy/1078-vverh-2009.html',
          image: 'c09d60c2bcf83ng72m70k.jpg',
          tags: ["Комедии", "Драмы", "Приключения", "Семейные", "Полнометражные", "Зарубежные"],
        },
        {
          name: 'Эрнест и Селестина: Приключения мышки и медведя',
          url: 'https://rezka.ag/cartoons/fantasy/6626-ernest-i-selestina-priklyucheniya-myshki-i-medvedya-2012.html',
          image: 'a084388d7669cnn17e25w.jpg',
          tags: [	"Фэнтези", "Драмы", "Криминал", "Приключения", "Семейные", "Полнометражные", "Зарубежные"],
        },
        {
          name: 'Балто',
          url: 'https://rezka.ag/cartoons/adventures/1190-balto-1995.html',
          image: 'jac0d2169786aqf78j83l.jpg',
          tags: ["Приключения", "Драмы", "Семейные", "Детские", "Полнометражные", "Зарубежные"],
        },
        {
          name: 'Парфюмер: История одного убийцы',
          url: 'https://rezka.ag/films/fantasy/7174-parfyumer-istoriya-odnogo-ubiycy-2006.html',
          image: 'k859e453d995dyp75j26f.jpg',
          tags: [	"Фэнтези", "Драмы", "Криминал", "Зарубежные"],
        },
        {
          name: 'Семь жизней',
          url: 'https://rezka.ag/films/drama/786-sem-zhizney-2008.html',
          image: 'n989e26ab5ef8aw69c41r.jpg',
          tags: [	"Драмы", "Зарубежные"],
        },
        {
          name: 'Двухсотлетний человек',
          url: 'https://rezka.ag/films/fiction/4146-dvuhsotletniy-chelovek-1999.html',
          image: 'j0de6d09023a3ne60m50y.jpg',
          tags: ["Фантастика", "Драмы", "Мелодрамы", "Зарубежные"],
        },
        {
          name: 'Я робот',
          url: 'https://rezka.ag/films/action/759-ya-robot-2004.html',
          image: 'wbb14f4155fc0hy62e25b.jpg',
          tags: [	"Боевики", "Детективы", "Фантастика", "Триллеры", "Зарубежные"],
        },
        {
          name: 'Спасти рядового Райана',
          url: 'https://rezka.ag/films/action/828-spasti-ryadovogo-rayana-1998.html',
          image: 'h19e72312b67dbf72f36p.jpg',
          tags: [	"Боевики", "Драмы", "Военные", "Зарубежные"],
        },
        {
          name: 'Троя',
          url: 'https://rezka.ag/films/action/1483-troya-2004.html',
          image: 'm81a670d9a302vh99c16y.jpg',
          tags: [		"Боевики", "Драмы", "Мелодрамы", "Исторические", "Зарубежные"],
        },
        {
          name: 'Загадочная история Бенджамина Баттона',
          url: 'https://rezka.ag/films/drama/1070-zagadochnaya-istoriya-bendzhamina-battona-2008.html',
          image: 'n4ba218a740d9mq27b72o.jpg',
          tags: [	"Драмы", "Фантастика", "Зарубежные"],
        },
        {
          name: 'Люди в чёрном',
          url: 'https://rezka.ag/films/fiction/3401-lyudi-v-chernom-1997.html',
          image: 'td6ec3eb0919dxg60z32p.jpg',
          tags: ["Фантастика", "Боевики", "Комедии", "Зарубежные"],
        },
        {
          name: 'Аватар',
          url: 'https://rezka.ag/films/fiction/647-avatar-2009.html',
          image: 'h2120eb7e4907hk53v25x.jpeg',
          tags: [	"Фантастика", "Боевики", "Драмы", "Приключения", "Зарубежные"],
        },
        {
          name: 'Расправь крылья',
          url: 'https://rezka.ag/films/adventures/33416-rasprav-krylya-2019.html',
          image: 'f4507c2bd953caj18z83u.jpg',
          tags: [		"Приключения", "Семейные", "Зарубежные"],
        },
        {
          name: 'Три билборда на границе Эббинга, Миссури',
          url: 'https://rezka.ag/films/drama/26927-tri-bilborda-na-granice-ebbinga-missuri-2017.html',
          image: 'p3304733a6143dc50o94j.jpg',
          tags: [	"Драмы", "Криминал", "Комедии", "Зарубежные"],
        },
        {
          name: 'Дурак',
          url: 'https://rezka.ag/films/drama/2303-durak-2014.html',
          image: 'oefde51b2579aoy69m17c.jpg',
          tags: [	"Драмы", "Наши"],
        },
        {
          name: 'Хранители',
          url: 'https://rezka.ag/films/fiction/2930-hraniteli-2009.html',
          image: 'p9b7d47625eb5hb19e46s.jpg',
          tags: ["Фантастика", "Боевики", "Драмы", "Детективы", "Зарубежные"],
        },
        {
          name: 'Еще по одной',
          url: 'https://rezka.ag/films/drama/35264-esche-po-odnoy-2020.html',
          image: 'gbbbed3bb6c7ees21j18o.jpg',
          tags: [	"Драмы", "Комедии", "Зарубежные"],
        },
        {
          name: 'Форест гамп',
          url: 'https://rezka.ag/films/drama/763-forrest-gamp-1994.html',
          image: 'f8cfabd5b4fb8lh96z58u.jpg',
          tags: [	"Драмы", "Мелодрамы", "Зарубежные"],
        },
        {
          name: 'В погоне за счастьем',
          url: 'https://rezka.ag/films/biographical/826-v-pogone-za-schastem-2006.html',
          image: 'o101e475f3c23pe51h62f.jpg',
          tags: [	"Биографические", "Драмы", "Зарубежные"],
        },
        {
          name: '1+1',
          url: 'https://rezka.ag/films/drama/289-11-2011.html',
          image: 'za01e520d5831kb47h82c.jpg',
          tags: ["Драмы", "Комедии", "Биографические", "Зарубежные"],
        },
        {
          name: 'Жизнь пи',
          url: 'https://rezka.ag/films/drama/289-11-2011.html',
          image: 'qa10d01105cfala26d83l.jpg',
          tags: ["Фэнтези", "Приключения", "Драмы", "Зарубежные"],
        },
        {
          name: 'Жизнь пи',
          url: 'https://rezka.ag/films/drama/289-11-2011.html',
          image: 'qa10d01105cfala26d83l.jpg',
          tags: ["Фэнтези", "Приключения", "Драмы", "Зарубежные"],
        },
        {
          name: 'Невероятная жизнь Уолтера Митти',
          url: 'https://rezka.ag/films/adventures/1230-neveroyatnaya-zhizn-uoltera-mitti-2013.html',
          image: 'm6e139237eedeyk30o49o.jpg',
          tags: [	"Приключения", "Драмы", "Комедии", "Фэнтези", "Зарубежные"],
        },
        {
          name: '12 обезьян / Двенадцать обезьян',
          url: 'https://rezka.ag/films/thriller/4778-12-obezyan-1995.html',
          image: 'hea9603cf7db4vg65y62o.jpeg',
          tags: ["Триллеры", "Детективы", "Фантастика", "Зарубежные"],
        },
        {
          name: 'Дитя человеческое',
          url: 'https://rezka.ag/films/thriller/4778-12-obezyan-1995.html',
          image: 'hea9603cf7db4vg65y62o.jpeg',
          tags: ["Фантастика", "Триллеры", "Драмы", "Зарубежные"],
        },
      ])
  })

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Films = mongoose.model('Films', filmSchema);
export { Films };