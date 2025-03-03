const lyricsList = [
    { text: "Karna kamu cantik", speed: 50, pause: 1000 },
    { text: "Kan kuberi segalanya apa yang kupunya", speed: 70, pause: 2000 },
    { text: "Dan hatimu baik", speed: 40, pause: 1500 },
    { text: "Sempurnalah duniaku saat kau di sisiku", speed: 80, pause: 2500 },
    { text: "Bukan karna make up di wajahmu", speed: 60, pause: 1200 },
    { text: "Atau lipstik merah itu", speed: 50, pause: 2000 },
    { text: "Lembut hati tutur kata", speed: 70, pause: 1800 },
    { text: "Terciptalah cinta yang kupuja", speed: 90, pause: 3000 }
];

const lyricsElement = document.getElementById("lyrics");

function typeText(text, speed, callback) {
    let i = 0;
    lyricsElement.innerHTML = "";

    function typing() {
        if (i < text.length) {
            lyricsElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            setTimeout(callback, 500); // Jeda setelah selesai mengetik
        }
    }

    typing();
}

function startLyrics(index = 0) {
    if (index < lyricsList.length) {
        typeText(lyricsList[index].text, lyricsList[index].speed, () => {
            setTimeout(() => startLyrics(index + 1), lyricsList[index].pause);
        });
    }
}

startLyrics();
