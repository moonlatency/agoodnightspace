let resultsDisplay = new Vue({
    el: '#results-display',
    data: {
        results: [
            { shelter_id: '1', name: 'shelter1', address: 'hoodville' }, 
            { shelter_id: '2', name: 'shelter2', address: 'savagetown' }
        ]
    },
    methods: {
    
    },
    components: {
        'shelter-result': {
            template: `
                <div class='shelter-result'>
                    <span>{{ name }}</span>
                    <span>{{ address }}</span>
                </div>
            `,
            props: ['shelter_id', 'name', 'address']
        } 
    },
});