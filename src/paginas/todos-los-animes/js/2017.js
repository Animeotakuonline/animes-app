// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../img/2017/net-juu-no-susume-special.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Net-juu no Susume Special",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"204",
    },
    {
      imageSrc: "../../img/2017/yuuki-yuuna-wa-yuusha-de-aru-yuusha-no-shou.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"203",
    },
    {
      imageSrc: "../../img/2017/3-gatsu-no-lion-2nd-season.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "3-gatsu no Lion 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"202",
    },
    {
      imageSrc: "../../img/2017/fatestay-night-movie-heavens-feel-i-presage-flower.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Fate/stay night Movie: Heaven's Feel - I. Presage Flower",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"201",
    },
    {
      imageSrc: "../../img/2017/inuyashiki.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Inuyashiki",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"200",
    },
    {
      imageSrc: "../../img/2017/robomasters-the-animated-series.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "RoboMasters the Animated Seriese",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"199",
    },
    {
      imageSrc: "../../img/2017/boku-no-kanojo-ga-majimesugiru-sho-bitch-na-ken.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Boku no Kanojo ga Majimesugiru Sho-bitch na Ken",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"198",
    },
    {
      imageSrc: "../../img/2017/wake-up-girls-shin-shou.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Wake Up, Girls! Shin Shou",
      status: "Estado",
      availability: "Disponible X capitulos",
      por_ver:true,
      num:"197",
    },
    {
      imageSrc: "../../img/2017/evil-or-live.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Evil or Live",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"196",
    },
    {
      imageSrc: "../../img/2017/hyperventilation.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Hyperventilation",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"195",
    },
    {
      imageSrc: "../../img/2017/animegataris.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Animegataris",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"194",
    },
    {
      imageSrc: "../../img/2017/himouto-umaru-chan-r.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Himouto! Umaru-chan R",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"193",
    },
    {
      imageSrc: "../../img/2017/imouto-sae-ireba-ii.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Imouto sae Ireba Ii.",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"192",
    },
    {
      imageSrc: "../../img/2017/kujira-no-kora-wa-sajou-ni-utau.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Kujira no Kora wa Sajou ni Utau",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"191",
    },
    {
      imageSrc: "../../img/2017/love-kome-we-love-rice-2nd-season.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Love Kome: We Love Rice 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"190",
    },
    {
      imageSrc: "../../img/2017/classicaloid-2nd-season.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "ClassicaLoid 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"189",
    },
    {
      imageSrc: "../../img/2017/coderealize-sousei-no-himegimi.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Code:Realize: Sousei no Himegimi",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"188",
    },
    {
      imageSrc: "../../img/2017/houseki-no-kuni-tv.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Houseki no Kuni (TV)",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"187",
    },
    {
      imageSrc: "../../img/2017/love-live-sunshine-2nd-season.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Love Live! Sunshine!! 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"186",
    },
    {
      imageSrc: "../../img/2017/the-idolmster-side-m.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "The iDOLM@STER Side M",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"185",
    },
    {
      imageSrc: "../../img/2017/time-bokan-gyakushuu-no-san-akunin.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Time Bokan: Gyakushuu no San Akunin",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"184",
    },
    {
      imageSrc: "../../img/2017/two-car.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Two Car",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"183",
    },
    {
      imageSrc: "../../img/2017/blend-s.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Blend S",
      status: "Estado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"182",
    },
    {
      imageSrc: "../../img/2017/hoozuki-no-reitetsu-2nd-season.jpg",
      dateAdded: "2017",
      dateOfRelease: "Fecha de emisión",
      name: "Hoozuki no Reitetsu 2nd Season",
      status: "Estado",
      availability: "Disponible X capitulos",
      num:"181",
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