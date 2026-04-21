var app = new Vue({
    el: '#app',
    data: {
        title: 'Chuck Norris Jokes',
        chuck: [ 
            { 
               "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
               "value": "Chuck Norris can skydive into outer space." 
            }, 
            { 
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "value": "The chief export of Chuck Norris is pain." 
            }, 
            { 
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." 
             }, 
             { 
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "Time waits for no man. Unless that man is Chuck Norris." 
             }, 
             { 
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "If you spell Chuck Norris in Scrabble, you win. Forever." 
             }, 
        ]
    },
    components: {
        'chuck-card': {
            props: ['icon_url', 'value'],
            template: `
                <div class="card h-100">
                    <img :src="icon_url" class="card-img-top" alt="Chuck Norris">
                    <div class="card-body">
                        <p class= "card-text">{{ value }}</p>
                    </div>
                </div>
            `
        }
    }
})