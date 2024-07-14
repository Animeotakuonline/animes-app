// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2014/majimoji-rurumo.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Majimoji Rurumo",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"162",
      },
      {
        imageSrc: "../../img/2014/momo-kyun-sword.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Momo Kyun Sword",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"161",
      },
      {
        imageSrc: "../../img/2014/akame-ga-kill-theater.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Akame ga Kill! Theater",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"160",
      },
      {
        imageSrc: "../../img/2014/re-hamatora.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Re: Hamatora",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"159",
      },
      {
        imageSrc: "../../img/2014/ao-haru-ride.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Ao Haru Ride",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"158",
      },
      {
        imageSrc: "../../img/2014/dramatical-murder.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "DRAMAtical Murder",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"157",
      },
      {
        imageSrc: "../../img/2014/hanayamata.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "HaNaYaMaTa",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"156",
      },
      {
        imageSrc: "../../img/2014/jinsei.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Jinsei",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"155",
      },
      {
        imageSrc: "../../img/2014/himegoto.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Himegoto",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"154",
      },
      {
        imageSrc: "../../img/2014/francesca.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Fran♥cesca",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"153",
      },
      {
        imageSrc: "../../img/2014/puri-para.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Puri Para",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"152",
      },
      {
        imageSrc: "../../img/2014/barakamon.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Barakamon",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"151",
      },
      {
        imageSrc: "../../img/2014/akame-ga-kill.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Akame ga Kill!",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"150",
      },
      {
        imageSrc: "../../img/2014/gekkan-shoujo-nozaki-kun.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Gekkan Shoujo Nozaki-kun",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"149",
      },
      {
        imageSrc: "../../img/2014/spacedandy-2nd-season.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Space☆Dandy 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"148",
      },
      {
        imageSrc: "../../img/2014/yami-shibai-2nd-season.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Yami Shibai 2nd Season",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"147",
      },
      {
        imageSrc: "../../img/2014/mobile-suit-gundam-san.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Mobile Suit Gundam-san",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"146",
      },
      {
        imageSrc: "../../img/2014/bishoujo-senshi-sailor-moon-crystal.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sailor Moon: Crystal",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"145",
      },
      {
        imageSrc: "../../img/2014/sword-art-online-ii.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Sword Art Online II",
        status: "Estado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"144",
      },
      {
        imageSrc: "../../img/2014/shounen-hollywood-holly-stage-for-49.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Shounen Hollywood: Holly Stage for 49",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"143",
      },
      {
        imageSrc: "../../img/2014/aldnoahzero.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Aldnoah.Zero",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"142",
      },
      {
        imageSrc: "../../img/2014/glasslip.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Glasslip",
        status: "Estado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"141",
      },
      {
        imageSrc: "../../img/2014/shirogane-no-ishi-argevollen.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Shirogane no Ishi: Argevollen",
        status: "Estado",
        availability: "Disponible X capitulos",
        num:"140",
      },
      {
        imageSrc: "../../img/2014/tokyo-ghoul.jpg",
        dateAdded: "2014",
        dateOfRelease: "Fecha de emisión",
        name: "Tokyo Ghoul",
        status: "Estado",
        availability: "Disponible X capitulos (nota: volver a ver)",
        visto:true,
        num:"139",
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