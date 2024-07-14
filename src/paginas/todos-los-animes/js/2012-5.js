// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    
      {
        imageSrc: "../../img/2012/another-ova.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Another OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/ai-mai-moe-can-change.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Ai Mai! Moe Can Change!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/tamayura-hitotose-attakai-kaze-no-omoide-nanode.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Tamayura: Hitotose - Attakai Kaze no Omoide Nanode",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/akb0048.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "AKB0048",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/c3-special.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "C³ Special",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/new-prince-of-tennis-specials.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "New Prince of Tennis SP",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/hyouka.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Hyouka",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/eureka-seven-ao.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Eureka Seven AO",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/jormungand.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Jormungand",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/haiyoru-nyaruko-san.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Haiyore! Nyaruko-san",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/tasogare-otome-x-amnesia.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Tasogare Otome x Amnesia",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/saki-achiga-hen-episode-of-side-a.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Saki: Achiga-hen - Episode of Side-A",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/nazo-no-kanojo-x.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Nazo no Kanojo X",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/kuroko-no-basket.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kuroko no Basket",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/phi-brain-kami-no-puzzle-2nd-season.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Phi Brain: Kami no Puzzle 2nd Season",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/upotte.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Upotte!!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/fate-zero-2.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/Zero 2nd Season",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/sankarea.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Sankarea",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/acchi-kocchi.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Acchi Kocchi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/kore-wa-zombie-desu-ka-of-the-dead.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Kore wa Zombie Desu ka? of the Dead",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2012/medaka-box.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Medaka Box",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/recorder-to-randoseru-re.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Recorder to Randoseru Re♪",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/rock-lee-no-seishun-full-power-ninden.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Rock Lee no Seishun Full-Power Ninden",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2012/zetman.jpg",
        dateAdded: "2012",
        dateOfRelease: "Fecha de emisión",
        name: "Zetman",
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