// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [  
  {
    imageSrc: "../../img/2022/peter-grill-to-kenja-no-jikan-super-extra.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Peter Grill to Kenja no Jikan: Super Extra",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"200",
  },
  {
    imageSrc: "../../img/2022/yowamushi-pedal-limit-break.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yowamushi Pedal: Limit Break",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"199",
  },
  {
    imageSrc: "../../img/2022/blue-lock.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Blue Lock",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"198",
  },
  {
    imageSrc: "../../img/2022/fuufu-ijou-koibito-miman.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Fuufu Ijou, Koibito Miman.",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"197",
  },
  {
    imageSrc: "../../img/2022/bocchi-the-rock.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Bocchi the Rock!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"196",
  },
  {
    imageSrc: "../../img/2022/mairimashita-iruma-kun-3rd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Mairimashita! Iruma-kun 3rd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"195",
  },
  {
    imageSrc: "../../img/2022/seiken-densetsu-legend-of-mana-the-teardrop-crystal.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Seiken Densetsu: Legend of Mana - The Teardrop Crystal",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"194",
  },
  {
    imageSrc: "../../img/2022/akiba-maid-sensou.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Akiba Maid Sensou",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"193",
  },
  {
    imageSrc: "../../img/2022/megaton-kyuu-musashi-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Megaton-kyuu Musashi 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"192",
  },
  {
    imageSrc: "../../img/2022/boku-ga-aishita-subete-no-kimi-e.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Boku ga Aishita Subete no Kimi e",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"191",
  },
  {
    imageSrc: "../../img/2022/kimi-wo-aishita-hitori-no-boku-e.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kimi wo Aishita Hitori no Boku e",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"190",
  },
  {
    imageSrc: "../../img/2022/mob-psycho-100-iii.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Mob Psycho 100 III",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"189",
  },
  {
    imageSrc: "../../img/2022/muv-luv-alternative-2nd-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Muv-Luv Alternative 2nd Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"188",
  },
  {
    imageSrc: "../../img/2022/do-it-yourself.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Do It Yourself!!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"187",
  },
  {
    imageSrc: "../../img/2022/mushikaburi-hime.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Mushikaburi-hime",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"186",
  },
  {
    imageSrc: "../../img/2022/yama-no-susume-next-summit.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Yama no Susume: Next Summit",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"185",
  },
  {
    imageSrc: "../../img/2022/kage-no-jitsuryokusha-ni-naritakute.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Kage no Jitsuryokusha ni Naritakute!",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"184",
  },
  {
    imageSrc: "../../img/2022/tensei-shitara-ken-deshita.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Tensei shitara Ken Deshita",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    visto:true,
    num:"183",
  },
  {
    imageSrc: "../../img/2022/futoku-no-guild.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Futoku no Guild",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"182",
  },
  {
    imageSrc: "../../img/2022/human-bug-daigaku.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Human Bug Daigaku",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"181",
  },
  {
    imageSrc: "../../img/2022/shinobi-no-ittoki.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Shinobi no Ittoki",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"180",
  },
  {
    imageSrc: "../../img/2022/vazzrock-the-animation.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Vazzrock The Animation",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"179",
  },
  {
    imageSrc: "../../img/2022/meitantei-conan-hannin-no-hanzawa-san.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Meitantei Conan: Hannin no Hanzawa-san",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"178",
  },
  {
    imageSrc: "../../img/2022/golden-kamuy-4th-season.jpg",
    dateAdded: "2022",
    dateOfRelease: "Fecha de emisión",
    name: "Golden Kamuy 4th Season",
    status: "Estado",
    availability: "Disponible X capitulos",
    readMoreLink: "../2022/informacion/",
    num:"177",
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