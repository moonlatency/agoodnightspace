let search = new Vue({
    el: '#search',
    data: {
        results: [
            { shelter_id: '1', name: 'shelter1', address: '2342 Foggy Bottom Way', beds_available: 32, filters: {women: true} }, 
            { shelter_id: '2', name: 'shelter2', address: '2342 Foggy Bottom Way', beds_available: 0, filters: { women: true} },
            { shelter_id: '3', name: 'mens_shelter', address: '2342 Foggy Bottom Way', beds_available: 5, filters: {women: false} },
        ],
        filteredResults: [
            { shelter_id: '1', name: 'shelter1', address: '2342 Foggy Bottom Way', beds_available: 32, filters: {women: true} }, 
            { shelter_id: '2', name: 'shelter2', address: '2342 Foggy Bottom Way', beds_available: 0, filters: { women: true} },
            { shelter_id: '3', name: 'mens_shelter', address: '2342 Foggy Bottom Way', beds_available: 5, filters: {women: false} },
        ],
        checkedFilters: []
    },
    methods: {
        runFilters: function () {
            let filtered = this.results;

            this.checkedFilters.forEach( function ( f ) {
                debugger;
                switch ( f ) {
                    case 'open':
                        filtered = filtered.filter( (i) => true );
                        break;

                    case 'beds':
                        filtered = filtered.filter( ( i ) => i.beds_available > 0 );
                        break;

                    case 'women':
                        filtered = filtered.filter( ( i ) => i.filters.women );
                        break;
                }
            });

            this.filteredResults = filtered;
        },
    },
    components: {
        'shelter-result': {
            template: `
                <div class='shelter-result'>
                    <div class='left'>
                        <div class='name'>\{{ name }}</div>
                        <div class='address'>\{{ address }}</div>
                    </div>
                    <div class='right'>
                        <div class='beds-available'>\{{ beds_available }}</div>
                        <span>beds available</span>
                    </div>
                </div>
            `,
            props: ['shelter_id', 'name', 'address', 'beds_available']
        } 
    }
});

/*

*/