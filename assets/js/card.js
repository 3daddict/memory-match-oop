
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
        card.click(this.handleClick.bind(this));
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
        this.parent.handleCardClick(this);
        
    }

    this.revealSelf = function(){
        //this element > find child with back class > hide it
        this.renderedElement.find('.back').hide();
    }

    this.hideSelf = function(){

    }

    this.getID = function() {
        return this.frontImage;
    }
}