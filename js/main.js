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
            newCardEmployee: '',
            newCardPriority: '',
            employees: [
                { id: 1, name: 'Сотрудник 1' },
                { id: 2, name: 'Сотрудник 2' },
                { id: 3, name: 'Сотрудник 3' },
            ],
        }
    },
    computed: {
        sortedColumn1() {
            return this.column1.sort((a, b) => {
                const priorityA = this.getPriorityLevel(a.priority);
                const priorityB = this.getPriorityLevel(b.priority);
                if (priorityA < priorityB) {
                    return 1;
                } else if (priorityA > priorityB) {
                    return -1;
                } else {
                    return 0;
                }
            });
        },
        sortedColumn2() {
            return this.column2.sort((a, b) => {
                const priorityA = this.getPriorityLevel(a.priority);
                const priorityB = this.getPriorityLevel(b.priority);
                if (priorityA < priorityB) {
                    return 1;
                } else if (priorityA > priorityB) {
                    return -1;
                } else {
                    return 0;
                }
            });
        },
        sortedColumn3() {
            return this.column3.sort((a, b) => {
                const priorityA = this.getPriorityLevel(a.priority);
                const priorityB = this.getPriorityLevel(b.priority);
                if (priorityA < priorityB) {
                    return 1;
                } else if (priorityA > priorityB) {
                    return -1;
                } else {
                    return 0;
                }
            });
        },
        sortedColumn4() {
            return this.column4.sort((a, b) => {
                const priorityA = this.getPriorityLevel(a.priority);
                const priorityB = this.getPriorityLevel(b.priority);
                if (priorityA < priorityB) {
                    return 1;
                } else if (priorityA > priorityB) {
                    return -1;
                } else {
                    return 0;
                }
            });
        },
    },

    methods: {
        addCard() {
            if (this.newCardTitle !== ''&& this.newCardPriority !== '') {
                const newCard = {
                    id: Date.now(),
                    title: this.newCardTitle,
                    description: this.newCardDescription,
                    deadline: this.newCardDeadline,
                    employee: this.newCardEmployee,
                    createdDate: new Date().toLocaleString(),
                    priority: this.newCardPriority,
                };
                this.column1.push(newCard);
                this.newCardTitle = '';
                this.newCardDescription = '';
                this.newCardDeadline = '';
                this.newCardEmployee = '';
            }
        },
        getPriorityLevel(priority) {
            switch (priority) {
                case 'Низкий':
                    return 1;
                case 'Средний':
                    return 2;
                case 'Высокий':
                    return 3;
                default:
                    return 0;
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