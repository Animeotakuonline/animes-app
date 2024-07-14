// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
  {
    id:"rail-romanesque-2",
    imageSrc: "../../img/2023/rail-romanesque-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Rail Romanesque 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"230",
  },
  {
    id:"quan-zhi-ming",
    imageSrc: "../../img/2023/quan-zhi-ming.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Quan Zhi Ming",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"229",
  },
  {
    id:"mahoutsukai-no-yome-season-2-part-2",
    imageSrc: "../../img/2023/mahoutsukai-no-yome-season-2-part-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Mahoutsukai no Yome Season 2 Part 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"228",
  },
  {
    id:"kamierabi",
    imageSrc: "../../img/2023/kamierabi.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kamierabi",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"227",
  },
  {
    id:"uma-musume-pretty-derby-season-3",
    imageSrc: "../../img/2023/uma-musume-pretty-derby-season-3.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Uma Musume Pretty Derby Season 3",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"226",
  },
  {
    id:"yuzuki-san-chi-no-yonkyoudai",
    imageSrc: "../../img/2023/yuzuki-san-chi-no-yonkyoudai.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Yuzuki-san Chi no Yonkyoudai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"225",
  },
  {
    id:"16bit-sensation-another-layer",
    imageSrc: "../../img/2023/16bit-sensation-another-layer.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "16bit Sensation: Another Layer",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"224",
  },
  {
    id:"kizuna-no-allele-season-2",
    imageSrc: "../../img/2023/kizuna-no-allele-season-2.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kizuna no Allele Season 2",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"223",
  },
  {
    id:"bikkurimen",
    imageSrc: "../../img/2023/bikkurimen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bikkurimen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"222",
  },
  {
    id:"kage-no-jitsuryokusha-ni-naritakute-2nd-season",
    imageSrc: "../../img/2023/kage-no-jitsuryokusha-ni-naritakute-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kage no Jitsuryokusha ni Naritakute 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"221",
  },
  {
    id:"tokyo-revengers-tenjiku-hen",
    imageSrc: "../../img/2023/tokyo-revengers-tenjiku-hen.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tokyo Revengers: Tenjiku Hen",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"220",
  },
  {
    id:"konyaku-haki-sareta-reijou-wo-hirotta-ore-ga-ikenai-koto-wo-oshiekomu",
    imageSrc: "../../img/2023/konyaku-haki-sareta-reijou-wo-hirotta-ore-ga-ikenai-koto-wo-oshiekomu.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Konyaku Haki Sareta Reijou wo Hirotta Ore ga Ikenai koto wo Oshiekomu",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"219",
  },
  {
    id:"bullbuster",
    imageSrc: "../../img/2023/bullbuster.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Bullbuster",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"218",
  },
  {
    id:"seijo-no-maryoku-wa-bannou-desu-2nd-season",
    imageSrc: "../../img/2023/seijo-no-maryoku-wa-bannou-desu-2nd-season.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Seijo no Maryoku wa Bannou Desu 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"217",
  },
  {
    id:"seiken-gakuin-no-makentsukai",
    imageSrc: "../../img/2023/seiken-gakuin-no-makentsukai.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Seiken Gakuin no Maken Tsukai",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"216",
  },
  {
    id:"watashi-no-oshi-wa-akuyaku-reijou",
    imageSrc: "../../img/2023/watashi-no-oshi-wa-akuyaku-reijou.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Watashi no Oshi wa Akuyaku Reijou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"215",
  },
  {
    id:"paradox-live-the-animation",
    imageSrc: "../../img/2023/paradox-live-the-animation.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Paradox Live: The Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"214",
  },
  {
    id:"shy",
    imageSrc: "../../img/2023/shy.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Shy",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    visto: true,
    num:"213",
  },
  {
    id:"toaru-ossan-no-vrmmo-katsudouki",
    imageSrc: "../../img/2023/toaru-ossan-no-vrmmo-katsudouki.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Toaru Ossan no VRMMO Katsudouki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"212",
  },
  {
    id:"b-project-netsuretsulove-call",
    imageSrc: "../../img/2023/b-project-netsuretsulove-call.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "B-Project: Netsuretsu Love Call",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"211",
  },
  {
    id:"kamonohashi-ron-no-kindan-suiri",
    imageSrc: "../../img/2023/kamonohashi-ron-no-kindan-suiri.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Kamonohashi Ron no Kindan Suiri",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"210",
  },
  {
    id:"migi-to-dali",
    imageSrc: "../../img/2023/migi-to-dali.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Migi to Dali",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"209",
  },
  {
    id:"tensei-shitara-slime-datta-ken-coleus-no-yume",
    imageSrc: "../../img/2023/tensei-shitara-slime-datta-ken-coleus-no-yume.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei Shitara Slime Datta Ken: Coleus no Yume",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    por_ver: true,
    num:"208",
  },
  {
    id:"ragna-crimson",
    imageSrc: "../../img/2023/ragna-crimson.jpg",
    dateAdded: "2023",
    dateOfRelease: "Fecha de emisión",
    name: "Ragna Crimson",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2023/informacion/",
    num:"207",
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