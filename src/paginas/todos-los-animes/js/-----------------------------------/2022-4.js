// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
    imageSrc: "../../img/2022/isekai-ojisan.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Ojisan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"128",
  },
  {
    imageSrc: "../../img/2022/jashin-chan-dropkick-x.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Jashin-chan Dropkick X",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"127",
  },
  {
    imageSrc: "../../img/2022/mamahaha-no-tsurego-ga-motokano-datta.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Mamahaha no Tsurego ga Motokano datta",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"126",
  },
  {
    imageSrc: "../../img/2022/kinsou-no-vermeil-gakeppuchi-majutsushi-wa-saikyou-no-yakusai-to-mahou-sekai-wo-tsukisusumu.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kinsou no Vermeil: Gakeppuchi Majutsushi wa Saikyou no Yakusai to Mahou Sekai wo Tsukisusumu",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"125",
  },
  {
    imageSrc: "../../img/2022/tokyo-mew-mew-new.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Mew Mew New ♡",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"124",
  },
  {
    imageSrc: "../../img/2022/warau-arsnotoria-sun.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Warau Arsnotoria Sun!e",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"123",
  },
  {
    imageSrc: "../../img/2022/overlord-iv.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Overlord IV",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"122",
  },
  {
    imageSrc: "../../img/2022/cardfight-vanguard-willdress.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Cardfight!! Vanguard: will+Dress",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"121",
  },
  {
    imageSrc: "../../img/2022/meng-qi-shi-shen-huanxi-zhui-hun.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Meng Qi Shi Shen: Huanxi Zhui Hun",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"120",
  },
  {
    imageSrc: "../../img/2022/tuanzimen-de-shiming.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tuanzimen de Shiming",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"119",
  },
  {
    imageSrc: "../../img/2022/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-tv-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV) 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"118",
  },
  {
    imageSrc: "../../img/2022/tensei-kenja-no-isekai-life-dai-2-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"117",
  },
  {
    imageSrc: "../../img/2022/utawarerumono-futari-no-hakuoro.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Utawarerumono: Futari no Hakuoro",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"116",
  },
  {
    imageSrc: "../../img/2022/renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Renmei Kuugun Koukuu Mahou Ongakutai Luminous Witches",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"115",
  },
  {
    imageSrc: "../../img/2022/prima-doll.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Prima Doll",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"114",
  },
  {
    imageSrc: "../../img/2022/yurei-deco.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yurei Deco",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"113",
  },
  {
    imageSrc: "../../img/2022/engage-kiss.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Engage Kiss",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"112",
  },
  {
    imageSrc: "../../img/2022/kanojo-okarishimasu-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kanojo, Okarishimasu 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"111",
  },
  {
    imageSrc: "../../img/2022/musashino.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Musashino!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"110",
  },
  {
    imageSrc: "../../img/2022/kami-kuzuidol.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kami Kuzu☆Idol",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"109",
  },
  {
    imageSrc: "../../img/2022/lycoris-recoil.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Lycoris Recoil",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"108",
  },
  {
    imageSrc: "../../img/2022/shoot-goal-to-the-future.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shoot! Goal to the Future",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"107",
  },
  {
    imageSrc: "../../img/2022/teppen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Teppen!!!!!!!!!!!!!!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"106",
  },
  {
    imageSrc: "../../img/2022/bakuten-movie.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Bakuten!! Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"105",
  },

  ];



  

 // Función para agregar una tarjeta al contenedor
 function addCard(cardData, index) {
  const cardsContainer = document.getElementById("cardsContainer");

  const visto = cardData.visto || false;
  const por_ver = cardData.por_ver || false;
  const mirando = cardData.mirando || false;

  const cardHTML = `
    <div class="p-4 w-full sm:w-1/2 lg:w-1/2 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <a href="${cardData.readMoreLink || '#'}">
          <img class="h-72 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
        </a>
        <div class="p-6">
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateAdded}</h2>
          <h2 class="text-base font-medium text-indigo-300 mb-1">${cardData.dateOfRelease}</h2>
          <h1 class="text-2xl font-semibold mb-3 sm:text-xl sm:card-title">${cardData.name}</h1>
          <h3 class="text-black hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm mr-2 mb-2">${cardData.status}</h3>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3">
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                ${cardData.availability}
              </span>
            </div>
          </li>
          <div class="flex items-center flex-wrap">
            <a href="${cardData.readMoreLink || '#'}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="flex items-center flex-wrap">
            <p class="${visto ? 'text-white' : por_ver ? 'text-white' : mirando ? 'text-white' : 'text-black-600'} inline-flex items-center md:mb-2 lg:mb-0">#${cardData.num}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  cardsContainer.innerHTML += cardHTML;
}

cardsData.forEach((data, index) => addCard(data, index));

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

  document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.add('hidden');
    }
  });
});