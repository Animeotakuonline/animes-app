// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2013/blood-lad.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Blood Lad",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"130",
      },
      {
        imageSrc: "../../img/2013/kami-nomi-zo-shiru-sekai-megami-hen.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kami nomi zo Shiru Sekai: Megami-hen",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"129",
      },
      {
        imageSrc: "../../img/2013/teekyuu-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Teekyuu 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"128",
      },
      {
        imageSrc: "../../img/2013/uchouten-kazoku.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Uchouten Kazoku",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"127",
      },
      {
        imageSrc: "../../img/2013/fate-kaleid-liner-prisma-illya.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Fate/kaleid liner Prisma☆Illya",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"126",
      },
      {
        imageSrc: "../../img/2013/monogatari-series-second-season.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Monogatari Series: Second Season",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"125",
      },
      {
        imageSrc: "../../img/2013/genei-wo-kakeru-taiyou.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Genei wo Kakeru Taiyou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"124",
      },
      {
        imageSrc: "../../img/2013/kiniro-mosaic.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kiniro Mosaic",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"123",
      },
      {
        imageSrc: "../../img/2013/ro-kyu-bu-ss.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ro-Kyu-Bu! SS",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"122",
      },
      {
        imageSrc: "../../img/2013/shingeki-no-kyojin-recap.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin Recap",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"121",
      },
      {
        imageSrc: "../../img/2013/gintama-kanketsu-hen-yorozuya-yo-eien-nare.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Gintama: Kanketsu-hen - Yorozuya yo Eien Nare",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"120",
      },
      {
        imageSrc: "../../img/2013/danganronpa-kibou-no-gakuen-to-zetsubou-no-koukousei-the-animation.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Danganronpa: The Animation",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"119",
      },
      {
        imageSrc: "../../img/2013/love-lab.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Love Lab",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"118",
      },
      {
        imageSrc: "../../img/2013/seitokai-no-shukujitsu.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Seitokai no Shukujitsu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"117",
      },
      {
        imageSrc: "../../img/2013/servant-x-service.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Servant x Service",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"116",
      },
      {
        imageSrc: "../../img/2013/stella-jogakuin-koutou-ka-c3-bu.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Stella Jogakuin Koutou-ka C³-bu",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"115",
      },
      {
        imageSrc: "../../img/2013/rozen-maiden-2013.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Rozen Maiden (2013)",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"114",
      },
      {
        imageSrc: "../../img/2013/tamayura-more-aggressive.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Tamayura: More Aggressive",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"113",
      },
      {
        imageSrc: "../../img/2013/kitakubu-katsudou-kiroku.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kitakubu Katsudou Kiroku",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"112",
      },
      {
        imageSrc: "../../img/2013/senki-zesshou-symphogear-g.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Senki Zesshou Symphogear G",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        visto:true,
        num:"111",
      },
      {
        imageSrc: "../../img/2013/free.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Free!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"110",
      },
      {
        imageSrc: "../../img/2013/brothers-conflict.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Brothers Conflict",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"109",
      },
      {
        imageSrc: "../../img/2013/senyuu-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Senyuu. 2",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"108",
      },
      {
        imageSrc: "../../img/2013/gifuu-doudou-kanetsugu-to-keiji.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Gifuu Doudou!!: Kanetsugu to Keiji",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"107",
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