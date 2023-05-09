/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)*/




const App = Vue.createApp({
    data(){
        return{
            activeIndex : 0,
             Images : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                 {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                 {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        };
    },
    methods:{
        showPrevSlide(){
            this.activeIndex--;
            if(this.activeIndex >= this.Images.length){
                this.activeIndex = 0
            }
        },

        showNextSlide(){
            this.activeIndex++;
            if(this.activeIndex >= this.Images.length){
                this.activeIndex = 0
            }
        },

        setActiveIndex(i){
            this.activeIndex = i;
        }
    }
});


App.mount('.carousel');



















const containerHighlighted = document.querySelector('.highlighted');
const containerArrow = document.querySelector('.Arrow');


for (let i = 0; i < Images.length; i++) {
    let slide = Images[i]
	containerHighlighted.innerHTML += `
    <div class="slide${i == 0 ? ' active' : ''}">
                <img src="${slide.image}" 
                <div class="contents">
                    <h2>${slide.title}</h2>
                    <p>${slide.text}/p>
                </div>
            </div>`;
	containerArrow.innerHTML += `<img src="${slide.image}" alt="" class="${i == 0 ? 'active' : ''}">`;
}



const listHighlighted = document.querySelectorAll('.highlighted .slide');
const listArrow = document.querySelectorAll('.Arrow img');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');




let activeIndex = 0;

btnNext.addEventListener('click',
	function() {
		
		listHighlighted[activeIndex].classList.remove('active');
		listArrow[activeIndex].classList.remove('active');
	
		activeIndex++;
		if (activeIndex >= listHighlighted.length) {
			activeIndex = 0;
		}
		
		listHighlighted[activeIndex].classList.add('active');
		listArrow[activeIndex].classList.add('active');
	}
);

btnPrev.addEventListener('click',
	function() {
	
		listHighlighted[activeIndex].classList.remove('active');
		listArrow[activeIndex].classList.remove('active');
	
		activeIndex--;
		if (activeIndex < 0) {
			activeIndex = listHighlighted.length - 1;
		}
	
		listHighlighted[activeIndex].classList.add('active');
		listArrow[activeIndex].classList.add('active');
	}
);


for (let i = 0; i < listArrow.length; i++) {
	listArrow[i].addEventListener('click',
		function() {
			
			listHighlighted[activeIndex].classList.remove('active');
			listArrow[activeIndex].classList.remove('active');
			activeIndex = i;
			listHighlighted[activeIndex].classList.add('active');
			listArrow[activeIndex].classList.add('active');
		}
	)
}











































































































































































