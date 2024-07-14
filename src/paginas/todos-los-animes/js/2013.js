// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
      imageSrc: "../../img/2013/sword-art-online-extra-edition.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Sword Art Online: Extra Edition",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"250",
    },
    {
      imageSrc: "../../img/2013/neppuu-kairiku-bushi-road.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Neppuu Kairiku Bushi Road",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"249",
    },
    {
      imageSrc: "../../img/2013/pokemon-xy-new-year-special.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Pokemon XY: New Year Special",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"248",
    },
    {
      imageSrc: "../../img/2013/ansatsu-kyoushitsu.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Ansatsu Kyoushitsu",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"247",
    },
    {
      imageSrc: "../../img/2013/zetsumetsu-kigu-shoujo-amazing-twins.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Zetsumetsu Kigu Shoujo: Amazing Twins",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"246",
    },
    {
      imageSrc: "../../img/2013/buddy-complex.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Buddy Complex",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"245",
    },
    {
      imageSrc: "../../img/2013/majokko-shimai-no-yoyo-to-nene.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Majokko Shimai no Yoyo to Nene",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"244",
    },
    {
      imageSrc: "../../img/2013/chuunibyou-demo-koi-ga-shitai-ren-lite.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Chuu-ni Byou! Ren Lite",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"243",
    },
    {
      imageSrc: "../../img/2013/machine-doll-wa-kizutsukanai-specials.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Machine-Doll wa Kizutsukanai Specials",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      por_ver:true,
      num:"242",
    },
    {
      imageSrc: "../../img/2013/freezing-vibration-specials.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Freezing Vibration Specialse",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"241",
    },
    {
      imageSrc: "../../img/2013/uta-noprince-sama-maji-love-2000-shining-star-xmas.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Uta no☆Prince-sama♪ Maji Love 2000%: Shining Star Xmas",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"240",
    },
    {
      imageSrc: "../../img/2013/pupipo.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Pupipo!",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"239",
    },
    {
      imageSrc: "../../img/2013/genshiken-nidaime-ova.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Genshiken Nidaime OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"238",
    },
    {
      imageSrc: "../../img/2013/double-circle.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Double Circle",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"237",
    },
    {
      imageSrc: "../../img/2013/natsume-yuujinchou-nyanko-sensei-to-hajimete-no-otsukai.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Natsume Yuujinchou: Nyanko-sensei to Hajimete no Otsukai",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"236",
    },
    {
      imageSrc: "../../img/2013/mou-hitotsu-no-mirai-wo.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Mou Hitotsu no Mirai wo",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"235",
    },
    {
      imageSrc: "../../img/2013/sekai-de-ichiban-tsuyoku-naritai-specials.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Sekai de Ichiban Tsuyoku Naritai! Specials",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"234",
    },
    {
      imageSrc: "../../img/2013/shingeki-no-kyojin-ilse-no-techou.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Shingeki no Kyojin OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"233",
    },
    {
      imageSrc: "../../img/2013/date-a-live-ova.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Date A Live OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      visto:true,
      num:"232",
    },
    {
      imageSrc: "../../img/2013/blood-lad-ova.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Blood Lad OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"231",
    },
    {
      imageSrc: "../../img/2013/kuroko-no-basket-ova.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Kuroko no Basket OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"230",
    },
    {
      imageSrc: "../../img/2013/ghost-in-the-shell-arise-border2-ghost-whispers.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Ghost in the Shell: Arise - Border:2 Ghost Whispers",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"229",
    },
    {
      imageSrc: "../../img/2013/love-live-school-idol-project-ova.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Love Live! School Idol Project OVA",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      por_ver:true,
      num:"228",
    },
    {
      imageSrc: "../../img/2013/bayonetta-bloody-fate.jpg",
      dateAdded: "2013",
      dateOfRelease: "Fecha de emisión",
      name: "Bayonetta: Bloody Fate",
      status: "Estado: finalizado",
      availability: "Disponible X capitulos",
      num:"227",
    },
    
    
    // Agrega más objetos según sea necesario
  ];
// Función para agregar una tarjeta al contenedor
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