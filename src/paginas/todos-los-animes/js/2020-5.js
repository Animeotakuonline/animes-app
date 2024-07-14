// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2020/listeners.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Listeners",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"63",
  },
  {
    imageSrc: "../../img/2020/bungou-to-alchemist-shinpan-no-haguruma.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Bungou to Alchemist: Shinpan no Haguruma",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"62",
  },
  {
    imageSrc: "../../img/2020/asateer-mirai-no-mukashi-banashi.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Asateer: Mirai no Mukashi Banashi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"61",
  },
  {
    imageSrc: "../../img/2020/hachi-nan-tte-sore-wa-nai-deshou.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Hachi-nan tte, Sore wa Nai deshou!",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"60",
  },
  {
    imageSrc: "../../img/2020/kakushigoto-tv.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kakushigoto (TV)",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"59",
  },
  {
    imageSrc: "../../img/2020/kami-no-tou.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Kami no Tou",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"58",
  },
  {
    imageSrc: "../../img/2020/appare-ranman.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Appare-Ranman!",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"57",
  },
  {
    imageSrc: "../../img/2020/granblue-fantasy-the-animation-season-2-djeeta-hen.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Granblue Fantasy The Animation Season 2: Djeeta-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"56",
  },
  {
    imageSrc: "../../img/2020/psycho-pass-3-first-inspector.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Psycho-Pass 3: First Inspector",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"55",
  },
  {
    imageSrc: "../../img/2020/tsuujou-kougeki-ga-zentai-kougeki-de-ni-kai-kougeki-no-okaasan-wa-suki-desu-ka-ova.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka? OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"54",
  },
  {
    imageSrc: "../../img/2020/chuubyou-gekihatsu-boy-special.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Chuubyou Gekihatsu Boy Special",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"53",
  },
  {
    imageSrc: "../../img/2020/7-seeds-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "7 Seeds 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"52",
  },
  {
    imageSrc: "../../img/2020/bna.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "BNA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"51",
  },
  {
    imageSrc: "../../img/2020/tamayomi.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Tamayomi",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"50",
  },
  {
    imageSrc: "../../img/2020/nami-yo-kiitekure.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Nami yo Kiitekure",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"49",
  },
  {
    imageSrc: "../../img/2020/goblin-slayer-goblins-crown.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Goblin Slayer: Goblin's Crown",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"48",
  },
  {
    imageSrc: "../../img/2020/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-ii-ova.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"47",
  },
  {
    imageSrc: "../../img/2020/strike-the-blood-kieta-seisou-hen.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Strike the Blood: Kieta Seisou-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"46",
  },
  {
    imageSrc: "../../img/2020/the-daily-life-of-the-inmortal-king.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "The Daily Life of the Immortal King",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"45",
  },
  {
    imageSrc: "../../img/2020/made-in-abyss-movie-3-fukaki-tamashii-no-reimei.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Made in Abyss Movie 3: Fukaki Tamashii no Reimei",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"44",
  },
  {
    imageSrc: "../../img/2020/isekai-quartet-2nd-season.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Isekai Quartet 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"43",
  },
  {
    imageSrc: "../../img/2020/a3-season-spring-summer.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "A3! Season Spring & Summer",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"42",
  },
  {
    imageSrc: "../../img/2020/arp-backstage-pass.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "ARP Backstage Pass",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"41",
  },
  {
    imageSrc: "../../img/2020/dorohedoro.jpg",
    dateAdded: "2020",
    dateOfRelease: "Fecha de emisión",
    name: "Dorohedoro",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"40",
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