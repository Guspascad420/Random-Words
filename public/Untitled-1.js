const dict = {
    languages: ['Python', 'Javascript', 'Java', 'C++', 'Go'],
    skills: ['Noob', 'Junior', 'Mid', 'Senior', 'CEO'],
    companies: ['Tokopedia', 'Meta', 'Google', 'Amazon', 'Shopee', 'In Jae']
 }

function getRandomNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

let btn1 = document.getElementById("btn1")

function randomText() {
    skill = dict.skills[getRandomNum(dict.skills)];
    language = dict.languages[getRandomNum(dict.languages)];
    company = dict.companies[getRandomNum(dict.companies)];

    return `You are a ${skill} ${language} programmer working at ${company}`;
}

function showRandomText() {
    document.getElementById("demo").innerHTML = randomText();
    btn1.style.cursor = 'default';
    btn1.style.width = '140px';
    btn1.innerHTML = 'Try again later!'
    btn1.removeEventListener('click', showRandomText);
}

btn1.addEventListener('click', showRandomText);