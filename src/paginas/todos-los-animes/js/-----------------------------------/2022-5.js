// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
    imageSrc: "../../img/2022/yuru-camp-movie.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yuru Camp△ Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"104",
  },
  {
    imageSrc: "../../img/2022/yuusha-yamemasu-kenshuu-ryokou-wa-mokuteki-wo-miushinau-na.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yuusha, Yamemasu: Kenshuu Ryokou wa Mokuteki wo Miushinau na",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"103",
  },
  {
    imageSrc: "../../img/2022/rwby-hyousetsu-teikoku.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "RWBY: Hyousetsu Teikoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"102",
  },
  {
    imageSrc: "../../img/2022/boku-no-hero-academia-ona.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia (ONA)",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"101",
  },
  {
    imageSrc: "../../img/2022/dragon-ball-super-super-hero.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Dragon Ball Super: Super Hero",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"100",
  },
  {
    imageSrc: "../../img/2022/karakai-jouzu-no-takagi-san-movie.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Karakai Jouzu no Takagi-san Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"99",
  },
  {
    imageSrc: "../../img/2022/inu-ou.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Inu-Ou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"98",
  },
  {
    imageSrc: "../../img/2022/zanting-rang-wo-cha-gonglue.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Zanting! Rang Wo Cha Gonglue",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"97",
  },
  {
    imageSrc: "../../img/2022/5-toubun-no-hanayome-movie.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "5-toubun no Hanayome Movie",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"96",
  },
  {
    imageSrc: "../../img/2022/shin-ikkitousen.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shin Ikkitousen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"95",
  },
  {
    imageSrc: "../../img/2022/bubble.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Bubble",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"94",
  },
  {
    imageSrc: "../../img/2022/yuukoku-no-moriarty-ova.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yuukoku no Moriarty OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"93",
  },
  {
    imageSrc: "../../img/2022/zuihou-de-zhaohuan-shi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Zuihou de Zhaohuan Shi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"92",
  },
  {
    imageSrc: "../../img/2022/kakkou-no-iinazuke.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kakkou no Iinazuke",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"91",
  },
  {
    imageSrc: "../../img/2022/summertime-render.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Summertime Render",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"90",
  },
  {
    imageSrc: "../../img/2022/kaginado-season-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kaginado Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"89",
  },
  {
    imageSrc: "../../img/2022/kyoukai-senki-part-2.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kyoukai Senki Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"88",
  },
  {
    imageSrc: "../../img/2022/honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen-3rd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"87",
  },
  {
    imageSrc: "../../img/2022/onipan.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Onipan!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"86",
  },
  {
    imageSrc: "../../img/2022/kunoichi-tsubaki-no-mune-no-uchi.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kunoichi Tsubaki no Mune no Uchi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"85",
  },
  {
    imageSrc: "../../img/2022/kawaii-dake-ja-nai-shikimori-san.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kawaii dake ja Nai Shikimori-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"84",
  },
  {
    imageSrc: "../../img/2022/kingdom-4th-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kingdom 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"83",
  },
  {
    imageSrc: "../../img/2022/kono-healer-mendokusai.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kono Healer, Mendokusai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"82",
  },
  {
    imageSrc: "../../img/2022/spy-x-family.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Spy x Family",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"81",
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