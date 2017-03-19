let bedsController = new Vue({
    el: '#beds-controller',
    data: {
        beds_available: 5
    },
    methods: {
        increment: function () {
            this.beds_available++;
            $('.fa-bed').css('color', '#4682b4');
        },
        decrement: function () {
            this.beds_available = (--this.beds_available < 0) ? 0 : this.beds_available;
            if (  this.beds_available == 0 ) {
                $('.fa-bed').css('color', 'red');
            }
        }
    }
});