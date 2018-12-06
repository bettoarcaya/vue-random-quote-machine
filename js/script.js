//const URL = ;
new Vue({
    el:'#main',
    created: function(){
        document.body.style.background = '#16a085';
        this.getQuotes();
    },
    data:{
        title: 'Vue-Random Quote Machine',
        quotes: [],
        currentQuote: '',
        quoteAuthor: '',
    },
    methods:{
        getQuotes: function(){
            let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
            
            axios.get(url).then( response => {
                this.quotes = response.data.quotes;
                this.currentQuote = this.quotes[0].quote;
                this.quoteAuthor = this.quotes[0].author;
                console.log(this.quotes, this.currentQuote, this.quoteAuthor);
            });
        },
        nextQuote: function(){

        }
    }
});