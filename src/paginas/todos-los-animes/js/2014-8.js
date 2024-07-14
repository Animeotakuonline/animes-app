// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/gj-bu-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "GJ-bu@ OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"114",
      },
      {
        imageSrc: "../../img/2014/world-fool-news.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "World Fool News",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"113",
      },
      {
        imageSrc: "../../img/2014/m3-sono-kuroki-hagane.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "M3: Sono Kuroki Hagane",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"112",
      },
      {
        imageSrc: "../../img/2014/escha-logy-no-atelier-tasogare-no-sora-no-renkinjutsushi.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Escha & Logy no Atelier: Tasogare no Sora no Renkinjutsushi",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"111",
      },
      {
        imageSrc: "../../img/2014/mekakucity-actors.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mekakucity Actors",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"110",
      },
      {
        imageSrc: "../../img/2014/date-a-live-ii.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Date A Live II",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"109",
      },
      {
        imageSrc: "../../img/2014/sidonia-no-kishi.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sidonia no Kishi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"108",
      },
      {
        imageSrc: "../../img/2014/inugami-san-to-nekoyama-san.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Inugami-san to Nekoyama-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"107",
      },
      {
        imageSrc: "../../img/2014/gochuumon-wa-usagi-desu-ka.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gochuumon wa Usagi Desu ka?",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"106",
      },
      {
        imageSrc: "../../img/2014/ping-pong-the-animation.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ping Pong The Animation",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"105",
      },
      {
        imageSrc: "../../img/2014/ryuugajou-nanana-no-maizoukin.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ryuugajou Nanana no Maizoukin",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"104",
      },
      {
        imageSrc: "../../img/2014/yu-gi-oh-arc-v.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Yu-Gi-Oh! Arc-V",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"103",
      },
      {
        imageSrc: "../../img/2014/hitsugi-no-chaika.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hitsugi no Chaika",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"102",
      },
      {
        imageSrc: "../../img/2014/no-game-no-life.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "No Game No Life",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"101",
      },
      {
        imageSrc: "../../img/2014/fuuun-ishin-daishogun.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fuuun Ishin Dai☆Shogun",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"100",
      },
      {
        imageSrc: "../../img/2014/black-bullet.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Nombre del anime",
        status: "Black Bullet",
        availability: "Disponible X capitulos",
        visto:true,
        num:"99",
      },
      {
        imageSrc: "../../img/2014/kanojo-ga-flag-wo-oraretara.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kanojo ga Flag wo Oraretara",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"98",
      },
      {
        imageSrc: "../../img/2014/mahou-shoujo-taisen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mahou Shoujo Taisen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"97",
      },
      {
        imageSrc: "../../img/2014/soul-eater-not.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Soul Eater Not!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"96",
      },
      {
        imageSrc: "../../img/2014/isshuukan-friends.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Isshuukan Friends",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"95",
      },
      {
        imageSrc: "../../img/2014/love-live-school-idol-project-2nd-season.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Love Live! School Idol Project 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"94",
      },
      {
        imageSrc: "../../img/2014/mangaka-san-to-assistant-san-to.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mangaka-san to Assistant-san to",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"93",
      },
      {
        imageSrc: "../../img/2014/hero-bank.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Hero Bank",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"92",
      },
      {
        imageSrc: "../../img/2014/haikyuu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Haikyuu!!",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"91",
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