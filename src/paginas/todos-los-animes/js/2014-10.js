// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/majin-bone.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Majin Bone",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"66",
      },
      {
        imageSrc: "../../img/2014/haiyore-nyaruko-san-w-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Haiyore! Nyaruko-san W OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"65",
      },
      {
        imageSrc: "../../img/2014/mikakunin-de-shinkoukei-ova-2.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mikakunin de Shinkoukei OVA 2",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"64",
      },
      {
        imageSrc: "../../img/2014/maken-ki-two-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Maken-Ki! Two Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"63",
      },
      {
        imageSrc: "../../img/2014/choujigen-game-neptune-the-animation-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Choujigen Game Neptune: The Animation OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"62",
      },
      {
        imageSrc: "../../img/2014/wild-adapter.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Wild Adapter",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"61",
      },
      {
        imageSrc: "../../img/2014/witch-craft-works-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Witch Craft Works Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"60",
      },
      {
        imageSrc: "../../img/2014/onee-chan-ga-kita-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Onee-chan ga Kita Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"59",
      },
      {
        imageSrc: "../../img/2014/keroro-2014.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Keroro",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"58",
      },
      {
        imageSrc: "../../img/2014/sengoku-musou-sp-sanada-no-shou.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sengoku Musou SP: Sanada no Shou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"57",
      },
      {
        imageSrc: "../../img/2014/paulette-no-isu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Paulette no Isu",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"56",
      },
      {
        imageSrc: "../../img/2014/mikakunin-de-shinkoukei-mite-are-ga-watashitachi-no-tomatteiru-ryokan-yo.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mikakunin de Shinkoukei: Mite. Are ga Watashitachi no Tomatteiru Ryokan yo",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"55",
      },
      {
        imageSrc: "../../img/2014/tsubasa-to-hotaru.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tsubasa to Hotaru",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"54",
      },
      {
        imageSrc: "../../img/2014/sekaiichi-hatsukoi-movie-yokozawa-takafumi-no-baai.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sekaiichi Hatsukoi Movie: Yokozawa Takafumi no Baai",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"53",
      },
      {
        imageSrc: "../../img/2014/mitsuwano.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mitsuwano",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"52",
      },
      {
        imageSrc: "../../img/2014/yuusha-ni-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Yuushibu OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"51",
      },
      {
        imageSrc: "../../img/2014/fate-kaleid-liner-prisma-illya-2014.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/kaleid liner Prisma☆Illya (2014)",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"50",
      },
      {
        imageSrc: "../../img/2014/harmonie.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Harmonie",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"49",
      },
      {
        imageSrc: "../../img/2014/kuro-no-sumika-chronus.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kuro no Sumika -Chronus-",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"48",
      },
      {
        imageSrc: "../../img/2014/ookii-1-nensei-to-chiisana-2-nensei.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ookii 1 Nensei to Chiisana 2 Nensei",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"47",
      },
      {
        imageSrc: "../../img/2014/brothers-conflict-special.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Brothers Conflict Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"46",
      },
      {
        imageSrc: "../../img/2014/hetalia-the-beautiful-world-extra-disc.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hetalia: The Beautiful World Extra Disc",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"45",
      },
      {
        imageSrc: "../../img/2014/noragami-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Noragami OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"44",
      },
      {
        imageSrc: "../../img/2014/wonder-momo.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Wonder Momo",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"43",
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