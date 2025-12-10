// ====================== PRELOADER & TAHUN ======================
window.onload = () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    newQuestion();
    newEnglishWord();
};

// ====================== NAV TOGGLE ======================
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// ====================== RESPONSIVE CANVAS RESIZE ======================
window.addEventListener("resize", () => {
    setupRain();
    setupStars();
});

// ====================== RAIN EFFECT ======================
const rainCanvas = document.getElementById("rainCanvas");
const rainCtx = rainCanvas.getContext("2d");
let rainDrops = [];

function setupRain() {
    rainCanvas.width = innerWidth;
    rainCanvas.height = innerHeight;

    rainDrops = [...Array(120)].map(() => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 4 + 4,
    }));
}

function animateRain() {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    rainCtx.strokeStyle = "rgba(148,212,255,0.7)";
    rainCtx.lineWidth = 2;

    rainDrops.forEach((drop) => {
        rainCtx.beginPath();
        rainCtx.moveTo(drop.x, drop.y);
        rainCtx.lineTo(drop.x, drop.y + drop.length);
        rainCtx.stroke();

        drop.y += drop.speed;
        if (drop.y > rainCanvas.height) drop.y = -10;
    });

    requestAnimationFrame(animateRain);
}

setupRain();
animateRain();

// ====================== STAR BACKGROUND ======================
const starCanvas = document.getElementById("starCanvas");
const starCtx = starCanvas.getContext("2d");
let stars = [];

function setupStars() {
    starCanvas.width = innerWidth;
    starCanvas.height = innerHeight;

    stars = [...Array(150)].map(() => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        size: Math.random() * 2,
    }));
}

function drawStars() {
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    starCtx.fillStyle = "#ffffff";

    stars.forEach((star) => {
        starCtx.beginPath();
        starCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        starCtx.fill();
    });
}

setupStars();
setInterval(drawStars, 50);

// ====================== GAME MATEMATIKA ======================
let num1, num2;
let score = 0;

function newQuestion() {
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    document.getElementById("question").innerText = `${num1} + ${num2} = ?`;
}

function checkAnswer() {
    let userAns = document.getElementById("answer").value;

    if (userAns == num1 + num2) {
        score++;
        playCorrect();
    } else {
        playWrong();
    }

    document.getElementById("score").innerText = score;
    document.getElementById("answer").value = "";
    newQuestion();
}

// ====================== GAME ENGLISH ======================
const words = {
    apple: "apel",
    cat: "kucing",
    house: "rumah",
    water: "air",
    book: "buku",
};

let engScore = 0;
let currentWord;

function newEnglishWord() {
    const list = Object.keys(words);
    currentWord = list[Math.floor(Math.random() * list.length)];
    document.getElementById("word").innerText = `Translate: ${currentWord}`;
}

function checkEnglish() {
    let userInput = document.getElementById("engAnswer").value.toLowerCase();

    if (userInput === words[currentWord]) {
        engScore++;
        playCorrect();
    } else {
        playWrong();
    }

    document.getElementById("engScore").innerText = engScore;
    document.getElementById("engAnswer").value = "";
    newEnglishWord();
}

// ====================== SOUND FX ======================
function playCorrect() {
    new Audio(
        "https://cdn.pixabay.com/audio/2022/03/15/audio_4319457488.mp3"
    ).play();
}

function playWrong() {
    new Audio(
        "https://cdn.pixabay.com/audio/2022/03/15/audio_4895243725.mp3"
    ).play();
}

// ====================== EXIT GAME ======================
function exitGame() {
    alert("Game ditutup 🎮. Terima kasih sudah bermain!");
    document.getElementById("game").style.display = "none";
}


<td>${item.nama}</td>
<td>${item.alamat}</td>
<td>${item.umur}</td>
<td>${item.email}</td>
</tr>
`;
});
}


// Reset semua data
function resetVisitorData() {
localStorage.removeItem('visitor_count');
localStorage.removeItem('visitor_dataset');
alert('Semua data berhasil di-reset!');
location.reload();
}


<!-- === Visitor Dataset Form === -->
<section id="visitor-dataset" style="padding:40px; max-width:600px; margin:auto; font-family:Poppins;">
<h2>Form Data Pengunjung</h2>
<p>Silahkan isi data berikut:</p>


<form id="visitorForm" style="display:flex; flex-direction:column; gap:12px; margin-top:15px;">


<input type="text" id="nama" placeholder="Nama" required style="padding:10px; border-radius:8px; border:1px solid #ccc;" />


<input type="text" id="alamat" placeholder="Tempat Tinggal" required style="padding:10px; border-radius:8px; border:1px solid #ccc;" />


<input type="number" id="umur" placeholder="Umur" required style="padding:10px; border-radius:8px; border:1px solid #ccc;" />


<input type="email" id="email" placeholder="Email" required style="padding:10px; border-radius:8px; border:1px solid #ccc;" />


<input type="date" id="tanggal" required style="padding:10px; border-radius:8px; border:1px solid #ccc;" />


<button type="submit" style="padding:12px; background:#00eaff; border-radius:8px; border:none; color:#000; font-weight:600; cursor:pointer;">Simpan Data</button>
</form>


<h3 style="margin-top:30px;">📄 Data Pengunjung Tersimpan:</h3>
<div id="visitorList" style="margin-top:10px; padding:15px; background:#f1f1f1; border-radius:10px;"></div>
</section>


<script>
// Simpan data pengunjung ke localStorage
const form = document.getElementById('visitorForm');
const listBox = document.getElementById('visitorList');


function loadVisitors() {
let data = JSON.parse(localStorage.getItem('visitor_dataset')) || [];
listBox.innerHTML = data
.map((v, i) => `
<div style='padding:10px; background:#fff; margin-bottom:10px; border-radius:8px; box-shadow:0 0 5px #ddd;'>
<b>${i + 1}. ${v.nama}</b><br>
📍 ${v.alamat}<br>
🎂 Umur: ${v.umur}<br>
✉️ ${v.email}<br>
📅 Tanggal: ${v.tanggal}
</div>
`)
.join('');
}


loadVisitors();


form.addEventListener('submit', function (e) {
e.preventDefault();


const entry = {
nama: document.getElementById('nama').value,
alamat: document.getElementById('alamat').value,
umur: document.getElementById('umur').value,
email: document.getElementById('email').value,
tanggal: document.getElementById('tanggal').value
};


let data = JSON.parse(localStorage.getItem('visitor_dataset')) || [];
data.push(entry);
localStorage.setItem('visitor_dataset', JSON.stringify(data));


form.reset();
loadVisitors();
});
</script>
