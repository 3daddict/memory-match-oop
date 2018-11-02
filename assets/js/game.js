
function MemoryMatchGame() {
    this.cards = [];
    this.matchCount = 0;
    this.revertTime = 2000;
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

    this.handleCardClick = function(cardObjClicked) {
        console.log('My chillin was clicked: ', cardObjClicked);

        if (this.clickedCardsList.length < 2) {
            this.clickedCardsList.push(cardObjClicked);
            cardObjClicked.revealSelf();
        }
        if (this.clickedCardsList.length === 2) {
            if (this.clickedCardsList[0].getID() === this.clickedCardsList[1].getID()) {
                console.log('Match')
                this.clearClickedCardList();
                this.matchCount += 2;
                if (this.matchCount === this.cards.length) {
                    this.playerWins();
                }
            } else {
                setTimeout(this.revertClickedCards.bind(this), this.revertTime)
            }
        }
    }

    this.playerWins = function() {
        alert('You Win');
    }

    this.clearClickedCardList = function (){
        this.clickedCardsList = [];
    }

    this.revertClickedCards = function() {
        for(let i in this.clickedCardsList){
            this.clickedCardsList[i].hideSelf();
        }
        this.clearClickedCardList();
    }


}