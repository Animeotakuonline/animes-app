// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/artiswitch.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Artiswitch",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"125",
  },
  {
    imageSrc: "../../img/2021/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen-ova.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"124",
  },
  {
    imageSrc: "../../img/2021/zhen-hun-jie-bei-luo-shi-men-pian-part-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Zhen Hun Jie: Bei Luo Shi Men Pian Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"123",
  },
  {
    imageSrc: "../../img/2021/fategrand-order-shinsei-entaku-ryouiki-camelot-2-paladin-agateram.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 2 - Paladin; Agateram",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"122",
  },
  {
    imageSrc: "../../img/2021/jaku-chara-tomozaki-kun-specials.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Jaku-Chara Tomozaki-kun Specials",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"121",
  },
  {
    imageSrc: "../../img/2021/liang-bu-yi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Liang Bu Yi",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"120",
  },
  {
    imageSrc: "../../img/2021/shiguang-dailiren.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shiguang Dailiren",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"119",
  },
  {
    imageSrc: "../../img/2021/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iii-ova.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III OVA",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"118",
  },
  {
    imageSrc: "../../img/2021/luo-xiao-hei-zhan-ji-zhongsheng-zhi-men.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Luo Xiao Hei Zhan Ji: Zhongsheng Zhi Men",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"117",
  },
  {
    imageSrc: "../../img/2021/bang-dream-movie-episode-of-roselia-i-yakusoku.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "BanG Dream! Movie: Episode of Roselia - I: Yakusoku",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"116",
  },
  {
    imageSrc: "../../img/2021/mairimashita-iruma-kun-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mairimashita! Iruma-kun 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"115",
  },
  {
    imageSrc: "../../img/2021/cestvs-the-roman-fighter.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Cestvs: The Roman Fighter",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"114",
  },
  {
    imageSrc: "../../img/2021/osananajimi-ga-zettai-ni-makenai-love-comedy.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Osananajimi ga Zettai ni Makenai Love Comedy",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"113",
  },
  {
    imageSrc: "../../img/2021/itazuraguma-no-gloomy.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Itazuraguma no Gloomy",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"112",
  },
  {
    imageSrc: "../../img/2021/fumetsu-no-anata-e.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Fumetsu no Anata e",
    status: "Estado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"111",
  },
  {
    imageSrc: "../../img/2021/tokyo-revengers.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Revengers",
    status: "Estado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"110",
  },
  {
    imageSrc: "../../img/2021/ijiranaide-nagatoro-san.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Ijiranaide, Nagatoro-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"109",
  },
  {
    imageSrc: "../../img/2021/86-eighty-six.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "86 EIGHTY SIX",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"108",
  },
  {
    imageSrc: "../../img/2021/shadows-house.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shadows House",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"107",
  },
  {
    imageSrc: "../../img/2021/bishounen-tanteidan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Bishounen Tanteidan",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"106",
  },
  {
    imageSrc: "../../img/2021/battle-athletess-daiundoukai-restart.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Battle Athletess Daiundoukai ReSTART!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"105",
  },
  {
    imageSrc: "../../img/2021/mewkledreamy-mix.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mewkledreamy Mix!",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"104",
  },
  {
    imageSrc: "../../img/2021/chibi-revenger.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Chibi Revenger",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"103",
  },
  {
    imageSrc: "../../img/2021/blue-reflection-ray.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Blue Reflection Ray",
    status: "Estado",
    availability: "Disponible X capitulos",
    num:"102",
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