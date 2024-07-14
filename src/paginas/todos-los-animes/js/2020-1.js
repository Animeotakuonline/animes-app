// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2020/gochuumon-wa-usagi-desu-ka-bloom.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Gochuumon wa Usagi desu ka? Bloom",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"159",
      },
      {
        imageSrc: "../../img/2020/adachi-to-shimamura.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Adachi to Shimamura",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"158",
      },
      {
        imageSrc: "../../img/2020/strike-witches-road-to-berlin.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Strike Witches: Road to Berlin",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"157",
      },
      {
        imageSrc: "../../img/2020/noblesse.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Noblesse",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"156",
      },
      {
        imageSrc: "../../img/2020/akudama-drive.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Akudama Drive",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"155",
      },
      {
        imageSrc: "../../img/2020/guraburu.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Guraburu!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"154",
      },
      {
        imageSrc: "../../img/2020/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"153",
      },
      {
        imageSrc: "../../img/2020/tsukiuta-the-animation-2.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Tsukiuta. The Animation 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"152",
      },
      {
        imageSrc: "../../img/2020/one-room-third-season.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "One Room Third Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"151",
      },
      {
        imageSrc: "../../img/2020/maoujou-de-oyasumi.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Maoujou de Oyasumi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"150",
      },
      {
        imageSrc: "../../img/2020/ikebukuro-west-gate-park.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Ikebukuro West Gate Park",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"149",
      },
      {
        imageSrc: "../../img/2020/golden-kamuy-3rd-season.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Golden Kamuy 3rd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"148",
      },
      {
        imageSrc: "../../img/2020/mahouka-koukou-no-rettousei-raihousha-hen.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Mahouka Koukou no Rettousei: Raihousha-hen",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"147",
      },
      {
        imageSrc: "../../img/2020/kami-tachi-ni-hirowareta-otoko.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Kami-tachi ni Hirowareta Otoko",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"146",
      },
      {
        imageSrc: "../../img/2020/munou-na-nana.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Munou na Nana",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"145",
      },
      {
        imageSrc: "../../img/2020/iwa-kakeru-sport-climbing-girls.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Iwa Kakeru!: Sport Climbing Girls",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"144",
      },
      {
        imageSrc: "../../img/2020/jujutsu-kaisen-tv.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Jujutsu Kaisen (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"143",
      },
      {
        imageSrc: "../../img/2020/kings-raid-ishi-wo-tsugumono-tachi.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "King's Raid: Ishi wo Tsugumono-tachi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"142",
      },
      {
        imageSrc: "../../img/2020/tonikaku-kawaii.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Tonikaku Kawaii",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"141",
      },
      {
        imageSrc: "../../img/2020/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iii.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"140",
      },
      {
        imageSrc: "../../img/2020/rail-romanesque.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Rail Romanesque",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"139",
      },
      {
        imageSrc: "../../img/2020/inu-to-neko-docchi-mo-katteru-to-mainichi-tanoshii.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Inu to Neko Docchi mo Katteru to Mainichi Tanoshii",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"138",
      },
      {
        imageSrc: "../../img/2020/hypnosis-mic-division-rap-battle-rhyme-anima.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Hypnosis Mic: Division Rap Battle - Rhyme Anima",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"137",
      },
      {
        imageSrc: "../../img/2020/hanyou-no-yashahime-sengoku-otogizoushi.jpg",
        dateAdded: "2020",
        dateOfRelease: "Fecha de emisión",
        name: "Hanyou no Yashahime: Sengoku Otogizoushi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"136",
      },
      
  // Agrega más objetos según sea necesario
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