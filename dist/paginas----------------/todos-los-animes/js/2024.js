// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../img/2024/boku-no-hero-academia-7th-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Boku no Hero Academia 7th Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Boku no Hero Academia 7th Season.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II - Part 2",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Maou Gakuin no Futekigousha.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/kaijuu-8-gou.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kaijuu 8-gou",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Kaijuu 8 gou.html",
    },
    {
      imageSrc: "../../img/2024/kuroshitsuji-kishuku-gakkou-hen.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kuroshitsuji: Kishuku Gakkou Hen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Kuroshitsuji Kishuku Gakkou Hen.html"
    },
    {
      imageSrc: "../../img/2024/kono-subarashii-sekai-ni-shukufuku-wo-3.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kono Subarashii Sekai ni Shukufuku wo! 3",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Kono Subarashii Sekai ni Shukufuku wo! 3.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/date-a-live-v.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Date A Live IV",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Date A Live V.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/unnamed-memory.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Unnamed: Memory",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Unnamed Memory.html"
    },
    {
      imageSrc: "../../img/2024/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Mushoku Tensei Isekai Ittara Honki Dasu Part 2.html"
    },
    {
      imageSrc: "../../img/2024/hibike-euphonium-3.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Hibike! Euphonium 3",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Hibike Euphonium 3.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/sentai-daishikkaku.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Sentai Daishikkaku",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Sentai Daishikkaku.html"
    },
    {
      imageSrc: "../../img/2024/tensei-shitara-slime-datta-ken-3rd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Tensei shitara Slime Datta Ken 3rd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Tensei shitara Slime Datta Ken 3rd Season.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/wind-breaker.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Wind Breaker",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Wind Breaker.html"
    },
    {
      imageSrc: "../../img/2024/yuru-camp-season-3.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Yuru Camp△ Season 3",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Yuru Camp Season 3.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/hananoi-kun-to-koi-no-yamai.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Hananoi-kun to Koi no Yamai",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Hananoi-kun to Koi no Yamai.html"
    },
    {
      imageSrc: "../../img/2024/mahouka-koukou-no-rettousei-3rd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Mahouka Koukou no Rettousei 3rd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Mahouka Koukou no Rettousei 3rd Season.html",
      por_ver: true,
    },
    {
      imageSrc: "../../img/2024/ookami-to-koushinryou-merchant-meets-the-wise-wolf.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Ookami to Koushinryou Merchant Meets the Wise Wolf.html"
    },
    {
      imageSrc: "../../img/2024/sasayaku-you-ni-koi-wo-utau.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Sasayaku You ni Koi wo Utau",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Sasayaku You ni Koi wo Utau.html"
    },
    {
      imageSrc: "../../img/2024/bu-xing-si-yuan-qi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Bu Xing Si Yuan Qi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Bu Xing Si Yuan Qi.html"
    },
    {
      imageSrc: "../../img/2024/great-pretender-razbliuto.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Great Pretender: Razbliuto",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Great Pretender Razbliuto.html"
    },
    {
      imageSrc: "../../img/2024/yishi-zhi-zun.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Yishi Zhi Zun",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Yishi Zhi Zun.html"
    },
    {
      imageSrc: "../../img/2024/aishang-ta-de-liyou-extra.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Aishang Ta de Liyou: Extra",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Aishang Ta de Liyou Extra.html"
    },
    {
      imageSrc: "../../img/2024/ninja-kamui.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Ninja Kamui",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Ninja Kamui.html"
    },
    {
      imageSrc: "../../img/2024/wonderful-precure.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Wonderful Precure",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Wonderful Precure.html"
    },
    {
      imageSrc: "../../img/2024/kui-cheng-shoufu-cong-youxi-kaishi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kui Cheng Shoufu: Cong Youxi Kaishi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Kui Cheng Shoufu Cong Youxi Kaishi.html"
    },
    {
      imageSrc: "../../img/2024/taigu-xing-shen-jue.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Taigu Xing Shen Jue",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Taigu Xing Shen Jue.html"
    },
    {
      imageSrc: "../../img/2024/yi-ren-jun-moye.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Yi Ren Jun Moye",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Yi Ren Jun Moye.html"
    },
    {
      imageSrc: "../../img/2024/monsters-ippyaku-sanjou-hiryuu-jigoku.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Monsters: Ippyaku Sanjou Hiryuu Jigoku",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Monsters Ippyaku Sanjou Hiryuu Jigoku.html"
    },
    {
      imageSrc: "../../img/2024/da-yuzhou-shidai.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Da Yuzhou Shidai",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/Da Yuzhou Shidai.html"
    },
    {
      imageSrc: "../../img/2024/meiji-gekken-1874.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Meiji Gekken: 1874",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },
    {
      imageSrc: "../../img/2024/hikari-no-ou-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Hikari no Ou 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },
    {
      imageSrc: "../../img/2024/yami-shibai-12.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Yami Shibai 12",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/kingdom-5th-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kingdom 5th Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/bucchigiri.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Bucchigiri?!",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/cardfight-vanguard-divinez.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Cardfight!! Vanguard: Divinez",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/meitou-isekai-no-yu-kaitakuki-around-40-onsen-mania-no-tensei-saki-wa-nonbiri-onsen-tengoku-deshita.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Meitou &quot;Isekai no Yu&quot; Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/majo-to-yajuu.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Majo to Yajuu",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/urusei-yatsura-2022-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Urusei Yatsura (2022) 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/snack-basue.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Snack Basue",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/gekkan-mousou-kagaku.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Gekkan Mousou Kagaku",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/yuuki-bakuhatsu-bang-bravern.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Yuuki Bakuhatsu Bang Bravern",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/metallic-rouge.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Metallic Rouge",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/gekai-elise.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Gekai Elise",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/sengoku-youko.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Sengoku Youko",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/30-sai-made-doutei-dato-mahoutsukai-ni-nareru-rashii.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "30-sai made Doutei dato Mahoutsukai ni Nareru Rashii",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/synduality-noir-part-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Synduality: Noir Part 2",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/shaman-king-flowers.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Shaman King: Flowers",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/tsuki-ga-michibiku-isekai-douchuu-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/dosanko-gal-wa-namara-menkoi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Dosanko Gal wa Namara Menkoi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/oroka-na-tenshi-wa-akuma-to-odoru.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Oroka na Tenshi wa Akuma to Odoru",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      mirando: true,
    },

    {
      imageSrc: "../../img/2024/high-card-season-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "High Card Season 2",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/nozomanu-fushi-no-boukensha.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Nozomanu Fushi no Boukensha",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/himesama-goumon-no-jikan-desu.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Himesama &quot;Goumon&quot; no Jikan desu",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/boku-no-kokoro-no-yabai-yatsu-season-2.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Boku no Kokoro no Yabai Yatsu Season 2",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      mirando: true,
    },

    {
      imageSrc: "../../img/2024/ao-no-exorcist-shimane-illuminati-hen.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Ao no Exorcist: Shimane Illuminati-hen",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      mirando: true,
    },

    {
      imageSrc: "../../img/2024/loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-jiyuu-kimama-na-hanayome-seikatsu-wo-mankitsu-suru.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/kyuujitsu-no-warumono-san.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kyuujitsu no Warumono-san",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/saikyou-tank-no-meikyuu-kouryaku-tairyoku-9999-no-rare-skill-mochi-tank-yuusha-party-wo-tsuihou-sareru.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Saikyou Tank no Meikyuu Kouryaku: Tairyoku 9999 no Rare Skill-mochi Tank, Yuusha Party wo Tsuihou sareru",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/ore-dake-level-up-na-ken.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Ore dake Level Up na Ken",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      mirando: true,
    },

    {
      imageSrc: "../../img/2024/mashle-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Mashle 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/yubisaki-to-renren.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Yubisaki to Renren",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      mirando: true,
    },

    {
      imageSrc: "../../img/2024/kekkon-yubiwa-monogatari.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Kekkon Yubiwa Monogatari",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/pon-no-michi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Pon no Michi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/chiyu-mahou-no-machigatta-tsukaikata.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Chiyu Mahou no Machigatta Tsukaikata",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/momochi-san-chi-no-ayakashi-ouji.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Momochi-san Chi no Ayakashi Ouji",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/sasaki-to-pii-chan.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Sasaki to Pii-chan",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/chou-futsuu-ken-chiba-densetsu.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Chou Futsuu Ken Chiba Densetsu",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/mato-seihei-no-slave.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Mato Seihei no Slave",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/dungeon-meshi.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Dungeon Meshi",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
      mirando: true,
    },

    {
      imageSrc: "../../img/2024/jaku-chara-tomozaki-kun-2nd-stage.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Jaku-Chara Tomozaki-kun 2nd Stage",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/ishura.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Ishura",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },

    {
      imageSrc: "../../img/2024/mahou-shoujo-ni-akogarete.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Mahou Shoujo ni Akogarete",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },
    {
      imageSrc: "../../img/2024/wu-nao-monu-2nd-season.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Wu Nao Monu 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
    },

    {
      imageSrc: "../../img/2024/isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu",
      status: "Estado",
      availability: "Disponible X capitulos",
    },
    {
      imageSrc: "../../img/2024/wangu-kuang-di.jpg",
      dateAdded: "2024",
      dateOfRelease: "Fecha de emisión",
      name: "Wangu Kuang Di",
      status: "Estado",
      availability: "Disponible X capitulos",
      readMoreLink: "../2024/informacion/",
    },


    
    // Agrega más objetos según sea necesario
  ];

 // Función para agregar una tarjeta al contenedor
 function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");

  // Modifica la condición para incluir las tarjetas deseadas
  const visto = cardData.visto || false;
  const por_ver = cardData.por_ver || false;
  const mirando = cardData.mirando || false;


  const cardHTML = `
  <div class="p-4 sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto">
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
    <div class="p-6">
      <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
      <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
      <h1 class="text-2xl font-semibold mb-3">${cardData.name}</h1>
      <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
          <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            ${cardData.availability}
          </span>
        </div>
      </li>
      <div class="flex items-center flex-wrap">
        <a href="${cardData.readMoreLink}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
  `;



  cardsContainer.innerHTML += cardHTML;
}

// Agrega las tarjetas iniciales con índice
cardsData.forEach((data, index) => addCard(data, index));

// Evento para agregar una nueva tarjeta al hacer clic en el botón
document.getElementById("addCardBtn").addEventListener("click", () => {
  const newCardData = {
    // Datos para la nueva tarjeta
  };
  addCard(newCardData);
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('hidden');
  });

  // Cerrar la lista desplegable si se hace clic fuera de ella
  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.add('hidden');
    }
  });
});
