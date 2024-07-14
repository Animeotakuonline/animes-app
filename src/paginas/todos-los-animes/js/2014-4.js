// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/buddy-complex-kanketsu-hen-ano-sora-ni-kaeru-mirai-de.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Buddy Complex: Kanketsu-hen - Ano Sora ni Kaeru Mirai de",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"210",
      },
      {
        imageSrc: "../../img/2014/kara-no-kyoukai-4-garan-no-dou.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kara no Kyoukai 4: Garan no Dou",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"209",
      },
      {
        imageSrc: "../../img/2014/kara-no-kyoukai-5-mujun-rasen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kara no Kyoukai 5: Mujun Rasen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"208",
      },
      {
        imageSrc: "../../img/2014/kara-no-kyoukai-6-boukyaku-rokuon.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kara no Kyoukai 6: Boukyaku Rokuon",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"207",
      },
      {
        imageSrc: "../../img/2014/kara-no-kyoukai-7-satsujin-kousatsu-part-2.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kara no Kyoukai 7: Satsujin Kousatsu (Part 2)",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"206",
      },
      {
        imageSrc: "../../img/2014/tribe-cool-crew.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tribe Cool Crew",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"205",
      },
      {
        imageSrc: "../../img/2014/karen-senki.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Karen Senki",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"204",
      },
      {
        imageSrc: "../../img/2014/suisei-no-gargantia-meguru-kouro-haruka.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Suisei no Gargantia: Meguru Kouro, Haruka",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"203",
      },
      {
        imageSrc: "../../img/2014/terra-formars.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Terra Formars",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"202",
      },
      {
        imageSrc: "../../img/2014/fate-kaleid-liner-prisma-illya-2wei-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/kaleid liner Prisma☆Illya 2wei! Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"201",
      },
      {
        imageSrc: "../../img/2014/gekkan-shoujo-nozaki-kun-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gekkan Shoujo Nozaki-kun Specials",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"200",
      },
      {
        imageSrc: "../../img/2014/d-frag-ova.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "D-Frag! OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"199",
      },
      {
        imageSrc: "../../img/2014/kara-no-kyoukai-3-tsuukaku-zanryuu.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kara no Kyoukai 3: Tsuukaku Zanryuu",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"198",
      },
      {
        imageSrc: "../../img/2014/gokukoku-no-brynhildr-11-5.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gokukoku no Brynhildr 11.5",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"197",
      },
      {
        imageSrc: "../../img/2014/kill-la-kill-specials.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kill la Kill Special",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"196",
      },
      {
        imageSrc: "../../img/2014/fantasista-stella.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fantasista Stella",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"195",
      },
      {
        imageSrc: "../../img/2014/chuunibyou-demo-koi-ga-shitai-ren-the-rikka-wars.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Chuunibyou demo Koi ga Shitai! Ren: The Rikka Wars",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"194",
      },
      {
        imageSrc: "../../img/2014/ghost-in-the-shell-arise-border4-ghost-stands-alone.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ghost in the Shell: Arise - Border:4 Ghost Stands Alone",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"193",
      },
      {
        imageSrc: "../../img/2014/kill-la-kill-special.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Kill la Kill Ova",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"192",
      },
      {
        imageSrc: "../../img/2014/one-piece-3d2y-ace-no-shi-wo-koete-luffy-nakama-tono-chikai.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "One Piece 3D2Y",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"191",
      },
      {
        imageSrc: "../../img/2014/sora-no-otoshimono-final-eternal-my-master.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sora no Otoshimono Final: Eternal My Master",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"190",
      },
      {
        imageSrc: "../../img/2014/mujaki-no-rakuen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mujaki no Rakuen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"189",
      },
      {
        imageSrc: "../../img/2014/ao-haru-ride-unwritten.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ao Haru Ride OVA",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"188",
      },
      {
        imageSrc: "../../img/2014/mushishi-zoku-shou-odoro-no-michi.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mushishi Zoku Shou: Odoro no Michi",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"187",
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