let search = new Vue({
    el: '#search',
    data: {
        results: [
{ shelter_id: '1', name: 'San Francisco Homeless Outreach', address: '283 Steiner St.', beds_available: 0, filters: {women: false, open: false} }, 
{ shelter_id: '2', name: 'Better Choices', address: '183 Mission St.', beds_available: 3, filters: {women: false, open: false} },
{ shelter_id: '3', name: 'Catholic Charities of San Francisco', address: '17 Capp St.', beds_available: 39, filters: {women: false, open: false, showers: true} },
{ shelter_id: '4', name: 'Care Outreach Services', address: '1774 Hayes St.', beds_available: 0, filters: {women: false, open: false} },
{ shelter_id: '5', name: 'Helping Hands Shelter', address: '932 Martin Luther King Blvd.', beds_available: 77, filters: {women: false, open: true} },
{ shelter_id: '6', name: 'San Francisco Women\'s Shelter', address: '238 Argent Ct.', beds_available: 8, filters: {women: true, open: true} },
{ shelter_id: '7', name: 'San Francisco Men\'s Shelter', address: '241 Argent Ct.', beds_available: 3, filters: {men: true, women: false, open: true} },
{ shelter_id: '8', name: 'Sunset Baptist Church', address: '1438 Ulloa St.', beds_available: 0, filters: {women: true, open: true, showers: true} },
{ shelter_id: '9', name: 'Jazzy\'s Place', address: '238 Mission St.', beds_available: 11, filters: {women: false, open: true, showers: true, lgbtq: true} },
{ shelter_id: '10', name: 'Salvation Army', address: '1749 Van Ness St.', beds_available: 183, filters: {women: false, open: true, showers: true, lgbtq: false} }
],
        filteredResults: [
{ shelter_id: '1', name: 'San Francisco Homeless Outreach', address: '283 Steiner St.', beds_available: 0, filters: {women: false, open: false} }, 
{ shelter_id: '2', name: 'Better Choices', address: '183 Mission St.', beds_available: 3, filters: {women: false, open: false} },
{ shelter_id: '3', name: 'Catholic Charities of San Francisco', address: '17 Capp St.', beds_available: 39, filters: {women: false, open: false, showers: true} },
{ shelter_id: '4', name: 'Care Outreach Services', address: '1774 Hayes St.', beds_available: 0, filters: {women: false, open: false} },
{ shelter_id: '5', name: 'Helping Hands Shelter', address: '932 Martin Luther King Blvd.', beds_available: 77, filters: {women: false, open: true} },
{ shelter_id: '6', name: 'San Francisco Women\'s Shelter', address: '238 Argent Ct.', beds_available: 8, filters: {women: true, open: true} },
{ shelter_id: '7', name: 'San Francisco Men\'s Shelter', address: '241 Argent Ct.', beds_available: 3, filters: {men: true, women: false, open: true} },
{ shelter_id: '8', name: 'Sunset Baptist Church', address: '1438 Ulloa St.', beds_available: 0, filters: {women: true, open: true, showers: true} },
{ shelter_id: '9', name: 'Jazzy\'s Place', address: '238 Mission St.', beds_available: 11, filters: {women: false, open: true, showers: true, lgbtq: true} },
{ shelter_id: '10', name: 'Salvation Army', address: '1749 Van Ness St.', beds_available: 183, filters: {women: false, open: true, showers: true, lgbtq: false} }


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
                        filtered = filtered.filter( (i) => i.filters.open );
                        break;

                    case 'beds':
                        filtered = filtered.filter( ( i ) => i.beds_available > 0 );
                        break;

                    case 'women':
                        filtered = filtered.filter( ( i ) => i.filters.women );
                        break;

                    case 'showers':
                        filtered = filtered.filter( ( i ) => i.filters.showers );
                        break;

                    case 'men':
                        filtered = filtered.filter( ( i ) => i.filters.men );
                        break;

                    case 'lgbtq':
                        filtered = filtered.filter( ( i ) => i.filters.lgbtq );
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