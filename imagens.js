const additionalImage = document.getElementById('additionalImage');
const translations = {
    "clear sky": "céu claro",
    "few clouds": "poucas nuvens",
    "scattered clouds": "nuvens dispersas",
    "broken clouds": "nuvens fragmentadas",
    "overcast clouds": "nuvens cobertas",
    "light rain": "chuva fraca",
    "rain": "chuva",
    "moderate rain": "chuva moderada",
    "thunderstorm": "tempestade",
    "snow": "neve",
    "mist": "neblina",
    "heavy intensity rain": "chuva de forte intensidade",
};
function displayWeatherImage(description) {
    const weatherImages = {
        "céu limpo": [
            "./img/céu limpo.jpg",
        ],
        "poucas nuvens": [
            "Imagens/few_clouds.png",
            "svg/PoucasNuvens.svg"
        ],
        "nuvens dispersas": [
            "Imagens/scattered_clouds.png",
            "svg/NuvensdespersaseFragmentadas.svg"
        ],
        "nuvens quebradas": [
            "Imagens/broken_clouds.png",
            "svg/NuvensdispersaseFragmentadas.svg"
        ],
        "shower rain": [
            "Imagens/shower_rain.png",
            "svg/ChuvadeChuvisco.svg"
        ],
        "chuva": [
            "Imagens/rainy.png",
            "svg/Chuva.svg"
        ],
        "tempestade": [
            "Imagens/thunderstorm.png",
            "svg/Tempestade.svg"
        ],
        "neve": [
            "Trabalho CLIMA/Imagens/snowy.png",
            "svg/Neve.svg"
        ],
        "névoa": [
            "Imagens/mist.png",
            "svg/Nevoa.svg"
        ],
        "chuva moderada": [
            "Imagens/moderate_rain.jpg",
            "svg/ChuvaModerada.svg"
        ],
        "chuva leve": [
            "Imagens/light_rain.png",
            "svg/ChuvaLeve.svg"
        ],
        "nuvens nubladas": [
            "Imagens/overcast.png",
            "svg/NuvensNubladas.svg"
        ]
    };

    const formattedDescription = description.toLowerCase();
    const imageFiles = weatherImages[formattedDescription] || ["Imagens/sunny.jpg"]; // Imagem padrão

    const imageContainer = document.getElementById('weather-image');
    imageContainer.innerHTML = ''; // Limpa a imagem anterior

    // Adiciona todas as imagens correspondentes
    imageFiles.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl; // Referencia a imagem local
        img.alt = `Imagem do clima: ${description}`;
        img.style.width = '100%'; // Ajusta o tamanho
        img.style.height = 'auto';

        img.onerror = () => {
            img.style.display = 'none'; // Oculta se a imagem não existir
        };

        imageContainer.appendChild(img);
    });
}