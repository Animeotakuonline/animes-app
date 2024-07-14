// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2023/mahou-shoujo-magical-destroyers.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mahou Shoujo Magical Destroyers",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"87",
  },
   {
    imageSrc: "../../img/2023/kawaisugi-crisis.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kawaisugi Crisis",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"86",
  },
  {
    imageSrc: "../../img/2023/edomae-elf.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Edomae Elf",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"85",
  },
  {
    imageSrc: "../../img/2023/opuscolors.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Opus.COLORs",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"84",
  },
  {
    imageSrc: "../../img/2023/rokudou-no-onna-tachi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Rokudou no Onna-tachi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"83",
  },
  {
    imageSrc: "../../img/2023/xiling-jiyuan.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Xiling Jiyuan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"82",
  },
  {
    imageSrc: "../../img/2023/princess-principal-crown-handler-movie-3.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Princess Principal: Crown Handler Movie 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"81",
  },
  {
    imageSrc: "../../img/2023/dr-stone-new-world.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Dr. Stone: New World",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"80",
  },
  {
    imageSrc: "../../img/2023/kono-subarashii-sekai-ni-bakuen-wo.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kono Subarashii Sekai ni Bakuen wo!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver:true,
    num:"79",
  },
  {
    imageSrc: "../../img/2023/mahoutsukai-no-yome-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mahoutsukai no Yome Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"78",
  },
  {
    imageSrc: "../../img/2023/yuusha-ga-shinda.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yuusha ga Shinda!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"77",
  },
  {
    imageSrc: "../../img/2023/watashi-no-yuri-wa-oshigoto-desu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Watashi no Yuri wa Oshigoto desu!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver:true,
    num:"76",
  },
  {
    imageSrc: "../../img/2023/kaminaki-sekai-no-kamisama-katsudou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kaminaki Sekai no Kamisama Katsudou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"75",
  },
  {
    imageSrc: "../../img/2023/ensemble-stars-tsuioku-selection-element.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ensemble Stars!! Tsuioku Selection Element",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"74",
  },
  {
    imageSrc: "../../img/2023/tokyo-mew-mew-new-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Mew Mew New ♡ 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"73",
  },
  {
    imageSrc: "../../img/2023/the-idolmster-cinderella-girls-u149.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "The IDOLM@STER Cinderella Girls: U149",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"72",
  },
  {
    imageSrc: "../../img/2023/skip-to-loafer.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Skip to Loafer",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"71",
  },
  {
    imageSrc: "../../img/2023/kizuna-no-allele.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kizuna no Allele",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"70",
  },
  {
    imageSrc: "../../img/2023/alice-gear-aegis-expansion.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Alice Gear Aegis Expansion",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"69",
  },
  {
    imageSrc: "../../img/2023/isekai-wa-smartphone-to-tomo-ni-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai wa Smartphone to Tomo ni. 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"68",
  },
  {
    imageSrc: "../../img/2023/kuma-kuma-kuma-bear-punch.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kuma Kuma Kuma Bear Punch!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"67",
  },
  {
    imageSrc: "../../img/2023/yamada-kun-to-lv999-no-koi-wo-suru.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yamada-kun to Lv999 no Koi wo Suru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"66",
  },
  {
    imageSrc: "../../img/2023/boku-no-kokoro-no-yabai-yatsu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Kokoro no Yabai Yatsu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto:true,
    num:"65",
  },
  {
    imageSrc: "../../img/2023/my-home-hero.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "My Home Hero",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"64",
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
    <div class="p-4 sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <a href="${cardData.readMoreLink}">
          <img class="lg:h-72 md:h-48 w-full object-cover object-center" src="${cardData.imageSrc}" alt="blog">
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
            <a href="${cardData.readMoreLink}" class="${visto ? 'text-orange-400' : por_ver ? 'text-orange-400' : mirando ? 'text-orange-400' : 'text-blue-600'} inline-flex items-center md:mb-2 lg:mb-0">Leer Más
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <p></p>
          </div>
          <div class="flex items-center flex-wrap">
            <p ${cardData.num} class="${visto ? 'text-white' : por_ver ? 'text-white' : mirando ? 'text-white' : 'text-black-600'} inline-flex items-center md:mb-2 lg:mb-0">#${cardData.num}
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