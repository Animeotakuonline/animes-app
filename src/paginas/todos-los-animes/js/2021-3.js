// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/bang-dream-film-live-2nd-stage.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "BanG Dream! Film Live 2nd Stage",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"173",
  },
  {
    imageSrc: "../../img/2021/tonikaku-kawaii-sns.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tonikaku Kawaii: SNS",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"172",
  },
  {
    imageSrc: "../../img/2021/kaizoku-oujo.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kaizoku Oujo",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"171",
  },
  {
    imageSrc: "../../img/2021/mo-dao-zu-shi-wanjie-pian.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mo Dao Zu Shi: Wanjie Pian",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"170",
  },
  {
    imageSrc: "../../img/2021/boku-no-hero-academia-the-movie-3-world-heroes-mission.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Boku no Hero Academia the Movie 3: World Heroes' Mission",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"169",
  },
  {
    imageSrc: "../../img/2021/magia-record-mahou-shoujo-madokamagica-gaiden-tv-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Magia Record: Mahou Shoujo Madoka☆Magica Gaiden 2nd Season - Kakusei Zenya",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    por_ver:true,
    num:"168",
  },
  {
    imageSrc: "../../img/2021/jahy-sama-wa-kujikenai.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Jahy-sama wa Kujikenai!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"167",
  },
  {
    imageSrc: "../../img/2021/quanzhi-fashi-v.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Quanzhi Fashi V",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"166",
  },
  {
    imageSrc: "../../img/2021/heion-sedai-no-idaten-tachi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Heion Sedai no Idaten-tachi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"165",
  },
  {
    imageSrc: "../../img/2021/night-head-2041.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Night Head 2041",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"164",
  },
  {
    imageSrc: "../../img/2021/obey-me.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Obey Me!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"163",
  },
  {
    imageSrc: "../../img/2021/ryuu-to-sobakasu-no-hime.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Ryuu to Sobakasu no Hime",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"162",
  },
  {
    imageSrc: "../../img/2021/megami-ryou-no-ryoubo-kun.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Megami-ryou no Ryoubo-kun.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"161",
  },
  {
    imageSrc: "../../img/2021/deatte-5-byou-de-battle.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Deatte 5-byou de Battle",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"160",
  },
  {
    imageSrc: "../../img/2021/yami-shibai-9.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Yami Shibai 9",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"159",
  },
  {
    imageSrc: "../../img/2021/love-live-superstar.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Love Live! Superstar!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"158",
  },
  {
    imageSrc: "../../img/2021/100-man-no-inochi-no-ue-ni-ore-wa-tatteiru-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"157",
  },
  {
    imageSrc: "../../img/2021/d_cide-traumerei-the-animation.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "D_Cide Traumerei the Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"156",
  },
  {
    imageSrc: "../../img/2021/shiroi-suna-no-aquatope.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shiroi Suna no Aquatope",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"155",
  },
  {
    imageSrc: "../../img/2021/meikyuu-black-company.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Meikyuu Black Company",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"154",
  },
  {
    imageSrc: "../../img/2021/kobayashi-san-chi-no-maid-dragon-s.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kobayashi-san Chi no Maid Dragon S",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"153",
  },
  {
    imageSrc: "../../img/2021/cheat-kusushi-no-slow-life-isekai-ni-tsukurou-drugstore.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"152",
  },
  {
    imageSrc: "../../img/2021/tsukipro-the-animation-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tsukipro The Animation 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"151",
  },
  {
    imageSrc: "../../img/2021/tsuki-ga-michibiku-isekai-douchuu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tsuki ga Michibiku Isekai Douchuu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"150",
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