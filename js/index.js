//loads documents and generates quote upon loading
$(document).ready(function() {
  generateQuote();
  animateQuote();

  var text;

  // generates a new quote upon clicking the "new quote" button
  $('#to-quote').click(function() {
    generateQuote();
    animateQuote();
  });

  $('#to-tweet').click(function() {
    shareTweet();
  });

  $('#heart').on('click  mouseenter', function() {
    heartAnimation();
  });

  function generateQuote() {
    var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    var quote = newQuote.quote;
    var author = newQuote.author;
    text = '"' + quote + '" ' + ' ' + author;
    $('#quote').html(quote);
    $('#author').html('- ' + author);
  };

  function animateQuote() {
    $('p').hide().show(500);
  };

  function shareTweet() {
    window.open('https://twitter.com/intent/tweet?&text=' + encodeURIComponent(text));
  };

  function heartAnimation() {
    $('.fa-heart').toggleClass('animatedHeart');
  }
});

//quotes database
var quotes = [

  {
    "quote": "Raisin cookies that look like chocolate chip cookies are the main reason I have trust issues.",
    "author": "Bill Murray"
  }, {
    "quote": "What computer do you have? And please don't say a white one.",
    "author": "Sheldon Cooper"
  }, {
    "quote": "Walking with a friend in the dark is better than walking alone in the light.",
    "author": "Helen Keller"
  }, {
    "quote": "Leave the gun. Take the cannoli.",
    "author": "Godfather"
  }, {
    "quote": "Life is really simple, but we insist on making it complicated.",
    "author": "Confucius"
  }, {
    "quote": "Not everyone is meant to be in your future. Some people are just passing through to teach you lessons in life. ",
    "author": "unknown"
  }, {
    "quote": "When I let go of what I am, I become what I might be.",
    "author": "Lao Tzu"
  }, {
    "quote": "You may find the worst enemy or best friend in yourself.",
    "author": "English Proverb"
  }, {
    "quote": "I dream of painting and then I paint my dream.",
    "author": "Vincent van Gogh"
  }, {
    "quote": "I like work: it fascinates me. I can sit and look at it for hours.",
    "author": "Jerome K. Jerome"
  }, {
    "quote": "In the name of God, stop a moment, cease your work, look around you.",
    "author": "Leo Tolstoy"
  }, {
    "quote": "A journey is best measured in friends, rather than miles.",
    "author": "Tim Cahill"
  }, {
    "quote": "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.",
    "author": "Mark Twain"
  }, {
    "quote": "When overseas you learn more about your own country, than you do the place you’re visiting.",
    "author": "Clint Borgen"
  }, {
    "quote": "I won't be impressed with technology until I can download food.",
    "author": "Bill Murray"
  }, {
    "quote": "Don't cry because it's over, smile because it happened.",
    "author": "Dr. Seuss"
  }, {
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost"
  }, {
    "quote": "The correct animal for inter-species super soldier is the koala. You would wind up with an army so cute, it couldn't be attacked.",
    "author": "Sheldon Cooper"
  }, {
    "quote": "So many books, so little time.",
    "author": "Frank Zappa"
  }, {
    "quote": "It does not do to dwell on dreams and forget to live.",
    "author": "J.K. Rowling"
  }, {
	  "quote": "Never give up, and good luck will find you.",
	  "author": "Falcor"
  }, {
	  "quote": "If you want to change the future, start living as if you’re already there.",
	  "author": "Lynn Conway"
  }, {
	  "quote": "The closest a person ever comes to perfection is when he fills out a job application form.",
	  "author": "Businessman Stanley Randall"
  }, {
	  "quote": "Be yourself; everyone else is already taken.",
	  "author": "Oscar Wilde"
  }, {
	  "quote": "Whenever I feel the need to exercise, I lie down until it goes away.",
	  "author": "Paul Terry"
  }, {
	  "quote": "I'm not afraid of death; I just don't want to be there when it happens.",
	  "author": "Woody Allen"
  }, {
	  "quote": "A clever person solves a problem. A wise person avoids it.",
	  "author": "Albert Einstein"
  }
  
];