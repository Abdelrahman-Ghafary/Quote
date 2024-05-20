




function showquote() {
    var quote = [
        { quoteName: "“Be yourself; everyone else is already taken.”", authorName: " Oscar Wilde" },
        { quoteName: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", authorName: " Marilyn Monroe" },
        { quoteName: "“So many books, so little time.”", authorName: " Frank Zappa" },
        { quoteName: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", authorName: "Albert Einstein" },
        { quoteName: "“A room without books is like a body without a soul.”", authorName: "Marcus Tullius Cicero" },
        { quoteName: "“You only live once, but if you do it right, once is enough.”", authorName: "Mae West" },
        { quoteName: "“Be the change that you wish to see in the world.”", authorName: "Mahatma Gandhi" },
        { quoteName: "“If you tell the truth, you don't have to remember anything.”", authorName: "Mark Twain" },
        { quoteName: "“A friend is someone who knows all about you and still loves you.”", authorName: "Elbert Hubbard" },
        { quoteName: "“It is better to be hated for what you are than to be loved for what you are not.”", authorName: "Andre Gide, Autumn Leaves" },
        { quoteName: "“Without music, life would be a mistake.”", authorName: " Friedrich Nietzsche, Twilight of the Idols" },
    ]


var num = Math.round(Math.random() * 10)
    for (var i = 0; i < quote.length; i++) {
        // console.log(quote[Math.round(Math.random() * 10)].quoteName);
        // console.log(quote[Math.round(Math.random() * 10)].authorName);
        document.getElementById("demo").innerHTML = ` <div class="items_container">
       <h1>Quote of the Day</h1>
       <p>Press the button below to recieve a random quote!</p>
       <button onclick="showquote()">New Quote</button>
       <p id="quoteName">${quote[num].quoteName}</p>
       <h1 id="authorName">${quote[num].authorName}</h1>
   </div>`

    }


}






