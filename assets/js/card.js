
function Card(frontImage, parentObject){
    this.frontImage = frontImage;
    this.parent = parentObject;
    this.revealed = false;
    this.renderedElement = null;

    this.render = function() {
        //parent dom element
        let card = $("<div>", {
            class: 'card'
        });
        //child element
        let front = $("<div>", {
            class: 'front',
            css: {
                backgroundImage: `url(${this.frontImage})`
            }
        });
        //child element
        let back = $("<div>", {
            class: 'back'
        });
        //build dom element
        card.append(front, back);
        this.renderedElement = card;
        return card;
    }

    this.handleClick = function() {

    }
}