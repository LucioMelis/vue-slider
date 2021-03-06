const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

// Descrizione:
// Partendo dal template fornito renderizzare lo slider con Vue

console.log(slides);

const app = new Vue({
    el: '#root',
    //*********************** DATA ******************/ 
    data: {
        slides,
        index: 0
    },
    //*********************** METHODS ******************/ 
    methods: {

        decrementoIndex() {
            this.index--;
            if (this.index < 0) {
                this.index = this.slides.length - 1;
            }
        },
        incrementoIndex() {
            this.index++;
            if (this.index === this.slides.length) {
                this.index = 0;
            }

        },
        aggiungiClasse(elementoIndex) {
            const comparazioneImmagini = elementoIndex.image === this.slides[this.index].image;
            if (comparazioneImmagini) { /*booleana (comparazioneImmagini=== true)*/
                return 'thumb active'
            } else if (!comparazioneImmagini) { /*booleana (comparazioneImmagini=== false)*/
                return 'thumb'
            }

            // return comparazioneImmagini ? 'thumb active' : 'thumb';
        },

        // BONUS 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
        clickThumbs(indice) {
            const indiceThumbItem = indice;
            this.index = indiceThumbItem;
        },

        //BONUS 2- applicare l'autoplay allo slider : ogni 3 secondi, cambia immagine automaticamente
        // SOLUZIONE Adriano MIGLIORE
        intervalloSlide() {
            const timerSlide = setInterval(() => {
                this.incrementoIndex();
                clearInterval(timerSlide);
            }, 3000);
            // Prova 1 setInterval(this.incrementoIndex, 3000);
        }

        // Soluzione Adriano BONUS 2 - BONUS 3
        // utilizzare @mouseleave ='startTimer()' e far partire il timer
        // utilizzare @mouseover = 'stopTimer()' per stoppare il timer 

        // dentro mouseleave inseriamo una funzione:
        // idTimer la inizializziamo in DATA, come undefined
        // per richiamarla e non mettiamo const ma this
        // inseriamo una condizione -->

        // startTimer() {
        //     if(this.idTimer === undefined){
        //          this.idTimer = setInterval(this.incrementoIndex, 3000);
        //     }
        // },

        // nel mouseover inseriamo una funzione:
        //  stopTimer() {
        //   if(this.idTimer !== undefined){
        //       clearInterval(this.idTimer);
        //      }
        // }
    }
});

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider
// : ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider,
//  bloccare l'autoplay e farlo riprendere quando esce