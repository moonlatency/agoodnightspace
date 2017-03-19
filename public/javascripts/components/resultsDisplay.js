let resultsDisplay = new Vue({
    el: '#results-display',
    data: {
        results: [
            { shelter_id: '1', name: 'shelter1', address: '2342 Foggy Bottom Way', beds_available: 32, filters: [] }, 
            { shelter_id: '2', name: 'shelter1', address: '2342 Foggy Bottom Way', beds_available: 32, filters: [] },
            { shelter_id: '3', name: 'shelter1', address: '2342 Foggy Bottom Way', beds_available: 32, filters: [] },
        ]
    },
    methods: {
     
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
    },
});