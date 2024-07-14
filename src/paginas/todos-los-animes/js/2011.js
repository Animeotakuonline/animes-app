// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2011/fate-prototype.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Fate/Prototype",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/another.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Another",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/senki-zesshou-symphogear.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Senki Zesshou Symphogear",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/toradora-bentou-no-gokui.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Toradora!: Bentou no Gokui",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/ben-to-specials.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Ben-To Specials",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/maken-ki-specials.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Maken-Ki! Specials",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/hidan-no-aria-special.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/dragon-ball-episode-of-bardock.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Dragon Ball: Episode of Bardock",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/is-infinite-stratos-encore-koi-ni-kogareru-sextet.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "IS: Infinite Stratos Encore - Koi ni Kogareru Sextet",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/k-on-movie.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "K-On! (Movie)",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/carnival-phantasm-ex-season.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Carnival Phantasm EX Season",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/ikkitousen-shuugaku-toushi-keppuuroku.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Ikkitousen: Shuugaku Toushi Keppuuroku",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/usagi-drop-specials.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Usagi Drop Specials",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/carnival-phantasm-ilyas-castle.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Carnival Phantasm: Ilya's Castle",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/ao-no-exorcist-kuro-no-iede.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Ao no Exorcist: Kuro no Iede",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/guilty-crown.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Guilty Crown",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/un-go.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "UN-GO",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/kono-danshi-uchuujin-to-tatakaemasu.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Kono Danshi, Uchuujin to Tatakaemasu.",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/ben-to.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Ben-To",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    por_ver:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/mirai-nikki.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Mirai Nikki",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/shakugan-no-shana-iii-final.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Shakugan no Shana III (Final)",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/deadman-wonderland-ova.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Deadman Wonderland OVA",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    num:"#",
  },
  {
    imageSrc: "../../img/2011/boku-wa-tomodachi-ga-sukunai.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Boku wa Tomodachi ga Sukunai",
    status: "Estado: finalizado",
    availability: "Disponible X capitulos",
    visto:true,
    num:"#",
  },
  {
    imageSrc: "../../img/2011/persona-4-the-animation.jpg",
    dateAdded: "2011",
    dateOfRelease: "Fecha de emisión",
    name: "Persona 4 The Animation",
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