new Vue({
    el: '#app',
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
            column4: [],
            newCardTitle: '',
            newCardDescription: '',
            newCardDeadline: '',
            reasonForReturn: '',
        }
    },
    methods: {
        addCard() {
            if (this.newCardTitle !== '') {
                const newCard = {
                    id: Date.now(),
                    title: this.newCardTitle,
                    description: this.newCardDescription,
                    deadline: this.newCardDeadline,
                    createdDate: new Date().toLocaleString(),
                };
                this.column1.push(newCard);
                this.newCardTitle = '';
                this.newCardDescription = '';
                this.newCardDeadline = '';
            }
        },
        deleteCard(card) {
            this.column1.splice(this.column1.indexOf(card), 1);
        },
        editCard(card, newTitle, newDescription, newDeadline) {
            card.title = newTitle;
            card.description = newDescription;
            card.deadline = newDeadline;
            card.lastEdited = new Date().toLocaleString();
        },
        moveToSecondCol(card) {
            this.column1.splice(this.column1.indexOf(card), 1);
            this.column2.push(card);
        },
        moveCardToThird(card) {
            this.column2.splice(this.column2.indexOf(card), 1);
            this.column3.push(card);
        },
        moveCardToFourthOrReturn(card, reason) {
            this.column3.splice(this.column3.indexOf(card), 1);
            if (reason) {
                card.reasonForReturn = reason;
                this.column2.push(card);
            } else {
                if (new Date(card.deadline) < new Date()) {
                    card.isOverdue = true;
                }
                this.column4.push(card);
            }
        }
    }
})