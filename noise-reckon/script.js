const sensors = [50, 100, 250];
const noises = [0.1, 1, 2];
const blocks = [1, 3, 5];
const experimentNumber = 0;

const sensorSlider = document.getElementById('sensorSlider');
const noiseSlider = document.getElementById('noiseSlider');
const blockSlider = document.getElementById('blockSlider');

const sensorValue = document.getElementById('sensorValue');
const noiseValue = document.getElementById('noiseValue');
const blockValue = document.getElementById('blockValue');

const outputImage = document.getElementById('outputImage');

function updateImage() {
    const sensor = sensors[sensorSlider.value];
    const noise = noises[noiseSlider.value];
    const block = blocks[blockSlider.value];

    sensorValue.textContent = sensor;
    noiseValue.textContent = noise;
    blockValue.textContent = block;

    const noiseStr = noise.toString().replace('.', '_');
    const fileName = `images/sensors_${sensor}_noise_${noiseStr}_block_size_${block}_comparison.png`;
    outputImage.src = fileName;
}

sensorSlider.addEventListener('input', updateImage);
noiseSlider.addEventListener('input', updateImage);
blockSlider.addEventListener('input', updateImage);
