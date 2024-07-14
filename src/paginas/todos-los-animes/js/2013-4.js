// Ejemplo de datos para las tarjetas (puedes adaptar esto según tus necesidades)
const cardsData = [
    {
        imageSrc: "../../img/2013/minami-ke-natsuyasumi.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Minami-ke Natsuyasumi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"154",
      },
      {
        imageSrc: "../../img/2013/kobayashi-ga-kawai-sugite-tsurai.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kobayashi ga Kawai Sugite Tsurai!!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"153",
      },
      {
        imageSrc: "../../img/2013/sukitte-ii-na-yo-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Sukitte Ii na yo. OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,//tambien la serie del 7 de oct del 2012
        num:"152",
      },
      {
        imageSrc: "../../img/2013/corpse-party-tortured-souls-bougyakusareta-tamashii-no-jukyou.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"151",
      },
      {
        imageSrc: "../../img/2013/mirai-nikki-redial.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Mirai Nikki Redial",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"150",
      },
      {
        imageSrc: "../../img/2013/jewelpet-twinkle-hohoemi-no-niji-ni-dokkidoki.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Jewelpet Twinkle☆: Hohoemi no Niji ni Dokki☆Doki!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"149",
      },
      {
        imageSrc: "../../img/2013/mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo-ova.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo? OVA",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,//Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo?
        num:"148",
      },
      {
        imageSrc: "../../img/2013/buki-yo-saraba.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Buki yo Saraba",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"147",
      },
      {
        imageSrc: "../../img/2013/shingeki-no-kyojin-chimi-kyara-gekijou-tondeke-kunren-heidan.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Shingeki no Kyojin Picture Drama",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"146",
      },
      {
        imageSrc: "../../img/2013/yami-shibai.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Yami Shibai",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"145",
      },
      {
        imageSrc: "../../img/2013/ark-ix.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Ark IX",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"144",
      },
      {
        imageSrc: "../../img/2013/gatchaman-crowds.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Gatchaman Crowds",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"143",
      },
      {
        imageSrc: "../../img/2013/kimi-no-iru-machi-tv.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Kimi no Iru Machi",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"142",
      },
      {
        imageSrc: "../../img/2013/pokemon-pikachu-to-eevee-friends.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Pokemon: Pikachu to Eevee Friends",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"141",
      },
      {
        imageSrc: "../../img/2013/futari-wa-milky-holmes.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Futari wa Milky Holmes",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,//tiene mas temporadas y precuelas antes de esta
        num:"140",
      },
      {
        imageSrc: "../../img/2013/choujigen-game-neptune-the-animation.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Choujigen Game Neptune: The Animation",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        por_ver:true,
        num:"139",
      },
      {
        imageSrc: "../../img/2013/gin-no-saji.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Gin no Saji",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"138",
      },
      {
        imageSrc: "../../img/2013/makai-ouji-devils-and-realist.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Makai Ouji: Devils and Realist",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"137",
      },
      {
        imageSrc: "../../img/2013/watashi-ga-motenai-no-wa-dou-kangaetemo-omaera-ga-warui.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Watamote!",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"136",
      },
      {
        imageSrc: "../../img/2013/recorder-to-randoseru-mi.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Recorder to Randoseru Mi☆",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"135",
      },
      {
        imageSrc: "../../img/2013/fantasista-doll.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Fantasista Doll",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"134",
      },
      {
        imageSrc: "../../img/2013/hakkenden-touhou-hakken-ibun-2.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Hakkenden: Touhou Hakken Ibun 2nd Season",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"133",
      },
      {
        imageSrc: "../../img/2013/high-school-dxd-new.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "High School DxD New",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"132",
      },
      {
        imageSrc: "../../img/2013/genshiken-nidaime.jpg",
        dateAdded: "2013",
        dateOfRelease: "Fecha de emisión",
        name: "Genshiken Nidaime",
        status: "Estado: finalizado",
        availability: "Disponible X capitulos",
        num:"131",
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