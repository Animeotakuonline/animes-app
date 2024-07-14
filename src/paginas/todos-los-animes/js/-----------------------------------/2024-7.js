// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/himesama-goumon-no-jikan-desu.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 08 de enero del 2024",
    name: "Himesama &quot;Goumon&quot; no Jikan desu",
    status: "Estado: concluido",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    por_ver:true,
    num:"26",
  },
  {
    imageSrc: "../../img/2024/boku-no-kokoro-no-yabai-yatsu-season-2.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de enero del 2024",
    name: "Boku no Kokoro no Yabai Yatsu Season 2",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    visto: true,//falta ver cap 13
    num:"25",
  },
  {
    imageSrc: "../../img/2024/ao-no-exorcist-shimane-illuminati-hen.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de enero del 2024",
    name: "Ao no Exorcist: Shimane Illuminati-hen",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"24",
  },
  {
    imageSrc: "../../img/2024/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de enero del 2024",
    name: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    visto: true,
    num:"23",
  },
  {
    imageSrc: "../../img/2024/loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-jiyuu-kimama-na-hanayome-seikatsu-wo-mankitsu-suru.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de enero del 2024",
    name: "Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    visto:true,
    num:"22",
  },
  {
    imageSrc: "../../img/2024/kyuujitsu-no-warumono-san.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de enero del 2024",
    name: "Kyuujitsu no Warumono-san",
    status: "Estado: concluido",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"21",
  },
  {
    imageSrc: "../../img/2024/saikyou-tank-no-meikyuu-kouryaku-tairyoku-9999-no-rare-skill-mochi-tank-yuusha-party-wo-tsuihou-sareru.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de enero del 2024",
    name: "Saikyou Tank no Meikyuu Kouryaku: Tairyoku 9999 no Rare Skill-mochi Tank, Yuusha Party wo Tsuihou sareru",
    status: "Estado: concluido",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"20",
  },
  {
    imageSrc: "../../img/2024/ore-dake-level-up-na-ken.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de enero del 2024",
    name: "Ore dake Level Up na Ken",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    visto: true,
    num:"19",
  },
  {
    imageSrc: "../../img/2024/mashle-2nd-season.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de enero del 2024",
    name: "Mashle 2nd Season",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    num:"18",
  },
  {
    imageSrc: "../../img/2024/yubisaki-to-renren.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de enero del 2024",
    name: "Yubisaki to Renren",
    status: "Estado: concluido",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/",
    visto: true,
    num:"17",
  },
{
imageSrc: "../../img/2024/kekkon-yubiwa-monogatari.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 06 de enero del 2024",
name: "Kekkon Yubiwa Monogatari",
status: "Estado: concluido",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"16",
},
{
imageSrc: "../../img/2024/pon-no-michi.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 06 de enero del 2024",
name: "Pon no Michi",
status: "Estado: concluido",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"15",
},
{
imageSrc: "../../img/2024/sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de enero del 2024",
name: "Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga",
status: "Estado: concluido",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"14",
},
{
imageSrc: "../../img/2024/chiyu-mahou-no-machigatta-tsukaikata.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de enero del 2024",
name: "Chiyu Mahou no Machigatta Tsukaikata",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"13",
visto:true,
},

{
imageSrc: "../../img/2024/momochi-san-chi-no-ayakashi-ouji.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de enero del 2024",
name: "Momochi-san Chi no Ayakashi Ouji",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"12",
},
{
imageSrc: "../../img/2024/sasaki-to-pii-chan.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de enero del 2024",
name: "Sasaki to Pii-chan",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"11",
},

{
imageSrc: "../../img/2024/chou-futsuu-ken-chiba-densetsu.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de enero del 2024",
name: "Chou Futsuu Ken Chiba Densetsu",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"10",
},
{
imageSrc: "../../img/2024/mato-seihei-no-slave.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 04 de enero del 2024",
name: "Mato Seihei no Slave",
status: "Estado: concluido",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"9",
},

{
imageSrc: "../../img/2024/dungeon-meshi.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 04 de enero del 2024",
name: "Dungeon Meshi",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"8",
},
{
imageSrc: "../../img/2024/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 03 de enero del 2024",
name: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
visto: true,
num:"7",
},

{
imageSrc: "../../img/2024/jaku-chara-tomozaki-kun-2nd-stage.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 03 de enero del 2024",
name: "Jaku-Chara Tomozaki-kun 2nd Stage",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"6",
},
{
imageSrc: "../../img/2024/ishura.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 03 de enero del 2024",
name: "Ishura",
status: "Estado: concluido",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"5",
},

{
imageSrc: "../../img/2024/mahou-shoujo-ni-akogarete.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 03 de enero del 2024",
name: "Mahou Shoujo ni Akogarete",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
por_ver:true,
num:"4",
},
{
imageSrc: "../../img/2024/wu-nao-monu-2nd-season.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 02 de enero del 2024",
name: "Wu Nao Monu 2nd Season",
status: "Estado: en emision",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"3",
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