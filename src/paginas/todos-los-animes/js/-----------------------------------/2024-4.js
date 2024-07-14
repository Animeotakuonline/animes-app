// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    imageSrc: "../../img/2024/vampire-dormitory.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
    name: "Vampire Dormitory",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/vampire-dormitory.html",
    num:"98",
  },
  {
    imageSrc: "../../img/2024/tonari-no-youkai-san.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
    name: "Tonari no Youkai-san",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/tonari-no-youkai-san.html",
    num:"97",
  },
  {
    imageSrc: "../../img/2024/ooi-tonbo.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de abril del 2024",
    name: "Ooi! Tonbo",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"96",
  },
  {
    imageSrc: "../../img/2024/himitsu-no-aipri.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
    name: "Himitsu no AiPri",
    status: "Estado: por estrenar",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/himitsu-no-aipri.html",
    num:"95",
  },
  {
    imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/shinkalion-change-the-world.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
    name: "Shinkalion: Change the World",
    status: "Estado: en emision",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/shinkalion-change-the-world.html",
    num:"94",
  },
  {
    imageSrc: "../../img/2024/yoru-no-kurage-wa-oyogenai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
    name: "Yoru no Kurage wa Oyogenai",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/yoru-no-kurage-wa-oyogenai.html",
    num:"93",
  },
  {
    imageSrc: "../../img/2024/the-fable.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 07 de abril del 2024",
    name: "The Fable",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion/the-fable.html",
    num:"92",
  },
  {
    imageSrc: "../../img/2024/highspeed-etoile.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de abril del 2024",
    name: "Highspeed Etoile",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"91",
  },
  {
    imageSrc: "../../img/2024/karasu-wa-aruji-wo-erabanai.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de abril del 2024",
    name: "Karasu wa Aruji wo Erabanai",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    num:"90",
  },
  {
    imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/boku-no-hero-academia-memories.jpg",
    dateAdded: "2024",
    dateOfRelease: "Fecha de emisión: 06 de abril del 2024",
    name: "Boku no Hero Academia: Memories",
    status: "Estado: En emisión",
    availability: "Disponible X capitulos",
    readMoreLink: "../2024/informacion",
    visto:true,
    num:"89",
  },

{
imageSrc: "../../img/2024/tensei-shitara-slime-datta-ken-3rd-season.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de abril del 2024",
name: "Tensei shitara Slime Datta Ken 3rd Season",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/Tensei shitara Slime Datta Ken 3rd Season.html",
mirando:true,
num:"88",
},
{
imageSrc: "../../img/2024/mahouka-koukou-no-rettousei-3rd-season.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 01 de abril del 2024",
name: "Mahouka Koukou no Rettousei 3rd Season",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/Mahouka Koukou no Rettousei 3rd Season.html",
visto:true,
num:"87",
},
{
imageSrc: "../../img/2024/girls-band-cry.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 06 de abril del 2024",
name: "Girls Band Cry",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/",
num:"86",
},
{
imageSrc: "../../img/2024/astro-note.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de abril del 2024",
name: "Astro Note",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
num:"85",
},
{
imageSrc: "../../img/2024/henjin-no-salad-bowl.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de abril del 2024",
name: "Henjin no Salad Bowl",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
num:"84",
},
{
imageSrc: "../../img/2024/nijiyon-animation-2.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de abril del 2024",
name: "Nijiyon Animation 2",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
num:"83",
},
{
imageSrc: "../../img/2024/yuru-camp-season-3.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 04 de abril del 2024",
name: "Yuru Camp△ Season 3",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/Yuru Camp Season 3.html",
visto:true,
num:"82",
},
{
imageSrc: "../../img/2024/hananoi-kun-to-koi-no-yamai.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión:04 de abril del 2024",
name: "Hananoi-kun to Koi no Yamai",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/Hananoi-kun to Koi no Yamai.html",
visto:true,
num:"81",
},
{
imageSrc: "../../img/2024/wind-breaker.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 05 de abril del 2024",
name: "Wind Breaker",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/Wind Breaker.html",
num:"80",
},
{
imageSrc: "../../img/2024/bartender-kami-no-glass.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 04 de bril del 2024",
name: "Bartender: Kami no Glass",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
num:"79",
},
{
imageSrc: "https://cdn.jkdesu.com/assets/images/animes/image/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 04 de bril del 2024",
name: "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
visto:true,
num:"78",
},
{
imageSrc: "../../img/2024/touken-ranbu-kai-kyoden-moyuru-honnouji.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 02 de abril del 2024",
name: "Touken Ranbu Kai Kyoden Moyuru Honnouji",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
num:"77",
},
{
imageSrc: "../../img/2024/ookami-to-koushinryou-merchant-meets-the-wise-wolf.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 01 de abril del 2024",
name: "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion/Ookami to Koushinryou Merchant Meets the Wise Wolf.html",
num:"76",
},
{
imageSrc: "../../img/2024/tensei-shitara-dainana-ouji-datta-node-kimama-ni-majutsu-wo-kiwamemasu.jpg",
dateAdded: "2024",
dateOfRelease: "Fecha de emisión: 02 de abril del 2024",
name: "Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu",
status: "Estado: por estrenar",
availability: "Disponible X capitulos",
readMoreLink: "../2024/informacion",
num:"75",
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