// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2011/highschool-of-the-dead-drifters-of-the-dead.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Highschool of the Dead: Drifters of the Dead",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/ao-no-exorcist.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Ao no Exorcist",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/deadman-wonderland.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Deadman Wonderland",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/fairy-tail-ova.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Fairy Tail OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/seitokai-yakuindomo-ova.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Seitokai Yakuindomo OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/ano-hi-mita-hana-no-namae-wo-bokutachi-wa-mada-shiranai.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/hidan-no-aria.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Hidan no Aria",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"#",
      },
      {
        imageSrc: "../../img/2011/c-the-money-of-soul-and-possibility-control.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "C The Money of Soul and Possibility Control",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/seikon-no-qwaser-ii.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Seikon no Qwaser II",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/kami-nomi-zo-shiru-sekai-ii.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Kami nomi zo Shiru Sekai II",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/yu-gi-oh-zexal.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Yu☆Gi☆Oh! Zexal",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/astarotte-no-omocha.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Astarotte no Omocha!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/sekaiichi-hatsukoi.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Sekaiichi Hatsukoi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/mariaholic-alive.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Maria†Holic Alive",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      
      /*{
        imageSrc: "../../img/2011/gyakkyou-burai-kaiji-hakairoku-hen.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Nombre del anime",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },*/
      {
        imageSrc: "../../img/2011/yondemasu-yo-azazel-san.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Yondemasu yo, Azazel-san",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/sket-dance.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "SKET Dance",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/gyakkyou-burai-kaiji-hakairoku-hen.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Gyakkyou Burai Kaiji Hakairoku-hen",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/gintama-2011.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama 2011",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/nichijou.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Nichijou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/toriko.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Toriko",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/tiger-bunny.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Tiger & Bunny",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/freezing-specials.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Freezing Specials",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/dog-days.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Dog Days",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"#",
      },
      {
        imageSrc: "../../img/2011/hetalia-world-series-extra-episodes.jpg",
        dateAdded: "2011",
        dateOfRelease: "Fecha de emisión",
        name: "Hetalia World Series Extra Episodes",
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