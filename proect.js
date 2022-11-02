const business = {
    whatBusiness: 'Кофейня',
    nameBusiness: 'МАШАР',
    menu: {
        capuchino: 300,
        latte: 250,
        makuchino: 200,
        iceCoffe: 150,
        espresso: 100,
    },
    numberOfVisitors: 10,
    closingTime: 'До 10 часов',
    openingTime: 'В 10 часов',
    
    getStatus () {
       return `${this.whatBusiness}-${this.nameBusiness}! Время открытия - ${this.openingTime}, время закрытия - ${this.closingTime}!`
    },
    
    menuList () {
        console.log('МЕНЮ:')
        console.log(`Капучино-${this.menu.capuchino}`)
        console.log(`Латте-${this.menu.latte}`)
        console.log(`Макучино-${this.menu.makuchino}`)
        console.log(`Айс кофе-${this.menu.iceCoffe}`)
        console.log(`Эспрессо-${this.menu.espresso}`)
    },
    
    discount () {
        return `Пенсионерам скидка в 50%`
    },
    
    menuDiscount () {
        console.log('МЕНЮ:')
        console.log('Капучино-150')
        console.log(`Латте-125`)
        console.log('Макучино-100')
        console.log('Айс Кофе-75')
        console.log(`Эспресco-50`)
    },
    
    closure () {
        return `${this.closingTime}! Закрытие! Всем на выход!`
    },
    
    visitors () {
        this.numberOfVisitors ++;
        return `Количество посетителей-${this.numberOfVisitors}`
    },

    repurt () {
        if (this.numberOfVisitors > 10) {
            return `Отличная работа! Так и до премии недалеко ( ;`
        }else if (this.numberOfVisitors <= 10){
            return `Сегодня плохо поработал. Завтра постарайся!`
        }
    },

};
console.log(business.visitors())