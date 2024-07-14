// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2021/shikizakura.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shikizakura",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"221",
  },
  {
    imageSrc: "../../img/2021/kimetsu-no-yaiba-mugen-ressha-hen.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kimetsu no Yaiba: Mugen Ressha-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    por_ver:true,
    num:"220",
  },
  {
    imageSrc: "../../img/2021/meng-qi-shi-shen-zaijie-liangyuan.jpg",//---------------------------------------
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Meng Qi Shi Shen: Zaijie Liangyuan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    por_ver:true,
    num:"219",
  },
  {
    imageSrc: "../../img/2021/dakaretai-otoko-1-i-ni-odosarete-imasu-movie-spain-hen.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Dakaretai Otoko 1-i ni Odosarete Imasu. Movie: Spain-hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"218",
  },
  {
    imageSrc: "../../img/2021/saihate-no-paladin.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Saihate no Paladin",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"217",
  },
  {
    imageSrc: "../../img/2021/visual-prison.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Visual Prison",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"216",
  },
  {
    imageSrc: "../../img/2021/taishou-otome-otogibanashi.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Taishou Otome Otogibanashi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"215",
  },
  {
    imageSrc: "../../img/2021/komi-san-wa-comyushou-desu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Komi-san wa, Comyushou desu.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"214",
  },
  {
    imageSrc: "../../img/2021/platinum-end.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Platinum End",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"213",
  },
  {
    imageSrc: "../../img/2021/muv-luv-alternative.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Muv-Luv Alternative",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"212",
  },
  {
    imageSrc: "../../img/2021/lie-huo-jiao-chou.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Lie Huo Jiao Chou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"211",
  },
  {
    imageSrc: "../../img/2021/sakugan.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sakugan",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"210",
  },
  {
    imageSrc: "../../img/2021/gokushufudou-part-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Gokushufudou Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"209",
  },
  {
    imageSrc: "../../img/2021/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"208",
  },
  {
    imageSrc: "../../img/2021/takt-op-destiny.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Takt Op. Destiny",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"207",
  },
  {
    imageSrc: "../../img/2021/sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"206",
  },
  {
    imageSrc: "../../img/2021/puraore-pride-of-orange.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Puraore! Pride of Orange",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"205",
  },
  {
    imageSrc: "../../img/2021/cardfight-vanguard-overdress-season-2.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Cardfight!! Vanguard: overDress Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"204",
  },
  {
    imageSrc: "../../img/2021/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"203",
  },
  {
    imageSrc: "../../img/2021/kyoukai-senki.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kyoukai Senki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"202",
  },
  {
    imageSrc: "../../img/2021/tsuki-to-laika-to-nosferatu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Tsuki to Laika to Nosferatu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"201",
  },
  /*{
    imageSrc: "../../img/2021/tsuki-ga-michibiku-isekai-douchuu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Nombre del anime",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"201",
  },*/
  {
    imageSrc: "../../img/2021/mushoku-tensei-isekai-ittara-honki-dasu-2nd-season.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    visto:true,
    num:"200",
  },
  {
    imageSrc: "../../img/2021/kyuuketsuki-sugu-shinu.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Kyuuketsuki Sugu Shinu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"199",
  },
  {
    imageSrc: "../../img/2021/muteking-the-dancing-hero.jpg",
    dateAdded: "2021",
    dateOfRelease: "Fecha de emisión",
    name: "Muteking the Dancing Hero",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2021/informacion/",
    num:"198",
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