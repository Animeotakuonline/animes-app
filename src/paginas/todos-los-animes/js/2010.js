// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2010/gosick.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Gosick",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/soukyuu-no-fafner-dead-aggressor-heaven-and-earth.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Soukyuu no Fafner: Dead Aggressor - Heaven and Earth",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/angel-beats-ova.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Angel Beats! OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/angel-beats-another-epilogue.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Angel Beats!: Another Epilogue",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/mirai-nikki-ova.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Mirai Nikki (OVA)",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/hyakka-ryouran-samurai-girls-specials.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Hyakka Ryouran: Samurai Girls Specials",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/soredemo-machi-wa-mawatteiru.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Soredemo Machi wa Mawatteiru",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/fortune-arterial-akai-yakusoku.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Fortune Arterial: Akai Yakusoku",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/toaru-majutsu-no-index-ii.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Toaru Majutsu no Index II",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/yozakura-quartet-hoshi-no-umi.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Yozakura Quartet: Hoshi no Umi",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/tantei-opera-milky-holmes.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Tantei Opera Milky Holmes",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/motto-to-love-ru.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Motto To LOVE-Ru",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/shinryaku-ika-musume.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Shinryaku! Ika Musume",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/arakawa-under-the-bridge-x-bridge.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Arakawa Under the Bridge x Bridge",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/yosuga-no-sora.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Yosuga no Sora",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/hakuouki-hekketsuroku.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Hakuouki Hekketsuroku",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/tegami-bachi-reverse.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Tegami Bachi Reverse",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/ore-no-imouto-ga-konnani-kawaii-wake-ga-nai.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "OreImo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2010/shinrei-tantei-yakumo.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Shinrei Tantei Yakumo",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/panty-stocking-with-garterbelt.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Panty & Stocking with Garterbelt",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/bakuman.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Bakuman",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/super-robot-taisen-og-the-inspector.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Super Robot Taisen OG: The Inspector",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/toaru-kagaku-no-railgun-ova.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "Toaru Kagaku no Railgun OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2010/mm.jpg",
    dateAdded: "2010",
    dateOfRelease: "Fecha de emisión",
    name: "MM!",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
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
    <div class="p-4 w-full sm:w-1/2 lg:w-1/4 ${visto ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : por_ver ? 'bg-gradient-to-b from-red-500 to-red-600 text-white' : mirando ? 'bg-gradient-to-b from-green-500 to-green-600 text-white' : 'bg-white text-black'} mx-auto card-container">
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