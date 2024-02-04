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
        }
    }
})