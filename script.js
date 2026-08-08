const lines = [
    "Abdul Ahad to Mehnaz Api ✨",
    "Happy Birthday, meri pyari behen! 🎂",
    "Aaj ka din itna khaas hai 🎉",
    "Ke main isay yun hi guzarne nahi de sakta tha...",
    "Bina yeh bataye ke aap meray liye...",
    "Kitni matter karti hain 🌸",
    "Humein ek dusre ko jaante huay...",
    "Bhale hi sirf kuch mahine huay hain,",
    "Lekin sach mein aisa lagta hai...",
    "Jaise aap saalon se meri behen hain 😊",
    "Kuch rishtay time se nahi napay jatay,",
    "Wo is se napay jatay hain...",
    "Ke koi banda apka dil ban k...",
    "Kitni baar apke liye khara hota hai,",
    "Or aap har baar khari rahi hain 💛",
    "Yaad hai humari mulaqat kaisay hui thi? 🤔",
    "Bas do log jo WhatsApp pe...",
    "Kaam ki wajah se connect huay,",
    "Shuru mein sirf ek professional baat cheet.",
    "Lekin phir aap uss se kahin zyada ban gayeen ✨",
    "Shuru se hi jis tarah...",
    "Aap ne meri care karna shuru kiya,",
    "Wo aisi cheez thi jiski mujhe umeed nahi thi.",
    "Aapky liay ya sab karna zaroori nahi tha,",
    "Phir bhi aap ne yeh sachche dil se kiya 🌷",
    "Bina koi shor machaye...",
    "Sirf isliye ke aap aisi hi hain.",
    "Sach kahun to shayad aapko khud bhi andaza nahi...",
    "Ke aisi kindness kitni rare hoti hai 🌟",
    "Log baatein karte hain...",
    "Ek dusre ke sath khara hone ki,",
    "Lekin aap ne wo waqai kiya,",
    "Khamoshi se, sacchay dil se,",
    "Jaisay yeh ek behen ke liye...",
    "Sab se normal si baat ho.",
    "Or yehi aap meray liye ban gayi hain...",
    "Sirf naam ki sis nahi,",
    "Balkay ek asli behen ke tarha 🥰",
    "Meri dua hai ke yeh birthday...",
    "Aapko utni hi khushiyan de...",
    "Jitni aap ne dusron ko di hain,",
    "Balkay us se bhi zyada 🎁",
    "Allah aapko sehat, sukoon, kamyabi...",
    "Or aise logon se nawaze...",
    "Jo aapki utni hi care karein...",
    "Jitni aap sab ki karti hain 🤲",
    "Har wo dua qubool ho...",
    "Jo aap ne kabhi khamoshi se maangi ho,",
    "Or zindagi ka yeh naya saal kam stress...",
    "Zyada hansi, or achi khabron se bhara ho 😊",
    "Shukriya ke aap aisi behen hain...",
    "Jo logon ki care karti hain.",
    "Shukriya support k liye...",
    "Or ek work connection ko...",
    "Asli rishtay mein badalnay k liye 🙌",
    "Umeed hai main bhi kabhi...",
    "Aapke liye waisay hi khara ho sakun...",
    "Jaisay aap meray liye khari rahi hain.",
    "Ek baar phir Happy Birthday, Mehnaz Api 🎈",
    "Blessed rahiye, caring rahiye...",
    "Or bilkul waisi hi rahiye jaisi hain 🌺",
    "Kyunke duniya ko...",
    "Aap jaisay logon ki zaroorat hai.",
    "Dil se, ✨",
    "Aapka chota bhai,",
    "Abdul Ahad."
];

// Start background components when loaded
window.addEventListener('DOMContentLoaded', () => {
    createFallingHearts();
    startTextAnimation();
    
    // Auto-play audio on first user click anywhere on screen (browser requirement)
    document.body.addEventListener('click', () => {
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.play().catch(e => console.log("Audio play error: ", e));
        }
    }, { once: true });
});

function createFallingHearts() {
    const container = document.getElementById('hearts-container');
    const emojis = ['🤍', '🌸', '✨', '💖'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 400);
}

let currentLineIndex = 0;

function startTextAnimation() {
    const textBox = document.getElementById('text-box');

    function showNextLine() {
        if (currentLineIndex < lines.length) {
            textBox.innerText = lines[currentLineIndex];
            
            // Dynamic text scaling for single line mobile view
            let maxFontSize = window.innerWidth > 600 ? 28 : 20; 
            textBox.style.fontSize = maxFontSize + 'px';
            
            while (textBox.scrollWidth > textBox.clientWidth && maxFontSize > 11) {
                maxFontSize--;
                textBox.style.fontSize = maxFontSize + 'px';
            }

            textBox.classList.add('visible');

            if (currentLineIndex === lines.length - 1) {
                return;
            }

            setTimeout(() => {
                textBox.classList.remove('visible');
                setTimeout(() => {
                    currentLineIndex++;
                    showNextLine();
                }, 2000);
            }, 5000);
        }
    }

    showNextLine();
}

