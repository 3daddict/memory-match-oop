
function MemoryMatchGame() {
    this.cards = [];
    this.matchCount = 0;
    this.imageList = [
        'http://msalvati.com/projects/memory_match//images/walter-white-1.svg',
        'http://msalvati.com/projects/memory_match//images/mike-erhmantraut-6.svg',
        'http://msalvati.com/projects/memory_match//images/skyler-white-5.svg',

    ];

    this.clickedCardsList = [];

    this.initializeGame = function() {
        let images = this.imageList.concat(this.imageList);
        this.cards = this.createCards(images);
    }

    this.createCards = function(images) {
        let cardList = [];
        for(let i in images){
            let newCard = new Card(images[i], this);
            let cardDomElement = newCard.render();
            $('#gameArea').append(cardDomElement);
            cardList.push(newCard);
        }
        return cardList;
    }

    this.handleCardClick = function() {

    }


}