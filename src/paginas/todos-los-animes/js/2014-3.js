// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/ai-tenchi-muyo.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ai Tenchi Muyo!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"234",
      },
      {
        imageSrc: "../../img/2014/cross-ange-tenshi-to-ryuu-no-rondo.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Cross Ange: Tenshi to Ryuu no Rondo",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"233",
      },
      {
        imageSrc: "../../img/2014/grisaia-no-kajitsu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Grisaia no Kajitsu",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"232",
      },
      {
        imageSrc: "../../img/2014/gugure-kokkuri-san.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gugure! Kokkuri-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"231",
      },
      {
        imageSrc: "../../img/2014/sora-no-method.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sora no Method",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"230",
      },
      {
        imageSrc: "../../img/2014/shingeki-no-bahamut-genesis.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Bahamut: Genesis",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"229",
      },
      {
        imageSrc: "../../img/2014/ookami-shoujo-to-kuro-ouji.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ookami Shoujo to Kuro Ouji",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"228",
      },
      {
        imageSrc: "../../img/2014/nanatsu-no-taizai.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nanatsu no Taizai",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"227",
      },
      {
        imageSrc: "../../img/2014/log-horizon-2nd-season.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Log Horizon 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"226",
      },
      {
        imageSrc: "../../img/2014/fatestay-night-unlimited-blade-works-tv.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/stay night: Unlimited Blade Works (TV)",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"225",
      },
      {
        imageSrc: "../../img/2014/madan-no-ou-to-vanadis.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Madan no Ou to Vanadis",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"224",
      },
      {
        imageSrc: "../../img/2014/garo-honoo-no-kokuin.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Garo: Honoo no Kokuin",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"223",
      },
      {
        imageSrc: "../../img/2014/world-trigger.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "World Trigger",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"222",
      },
      {
        imageSrc: "../../img/2014/ushinawareta-mirai-wo-motomete.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ushinawareta Mirai wo Motomete",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"221",
      },
      {
        imageSrc: "../../img/2014/donten-ni-warau.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Donten ni Warau",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"220",
      },
      {
        imageSrc: "../../img/2014/nisekoi-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nisekoi OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"219",
      },
      {
        imageSrc: "../../img/2014/selector-spread-wixoss.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Selector Spread WIXOSS",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"218",
      },
      {
        imageSrc: "../../img/2014/gundam-g-no-reconguista.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gundam: G no Reconguista",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"217",
      },
      {
        imageSrc: "../../img/2014/magic-kaito-1412.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Magic Kaito 1412",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"216",
      },
      {
        imageSrc: "../../img/2014/denki-gai-no-honya-san.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Denki-gai no Honya-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"215",
      },
      {
        imageSrc: "../../img/2014/danna-ga-nani-wo-itteiru-ka-wakaranai-ken.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Danna ga Nani wo Itteiru ka Wakaranai Ken",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"214",
      },
      {
        imageSrc: "../../img/2014/ane-log.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ane Log",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"213",
      },
      {
        imageSrc: "../../img/2014/futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "[Locodol] Yatte Mita.: Nagarekawa, Annai Shite Mita",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"212",
      },
      {
        imageSrc: "../../img/2014/toukiden-kiwami.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Toukiden Kiwami",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"211",
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