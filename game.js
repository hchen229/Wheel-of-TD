/* eslint-env browser, jquery */

// there are 12 boxes in the container
// click the start button to iterate through all boxes
// current color of the box sis red when iterate through all of them
// iteration stop randomly on a box
// flip the card with identical letters as the landing box
// make a scoreboard, enter players name, keep track of points of each player

$(document).ready(() => {
  // const moving = $('.piece');
  const start = $('button');
  const box = $('.box');
  let record;
  start.click(() => {
    console.log(record);
    if (record != undefined) {
      $(record).css('background', 'none');
    }

    const listBoxes = $('.box'); // gets the list of DOM with class box
    let rand = Math.floor((Math.random() * 60)); // random from 0-60
    let startBox = Math.floor((Math.random() * 12)); // making iteration start on random box
    // console.log(listBoxes[startBox]);
    // let originalColor = $(listBoxes[startBox]).css('background');

    // stop the iteration and change background color of the square
    let interval = setInterval(() => {
      if (rand <= 0) {
        clearInterval(interval);
        // landing box
        record = listBoxes[startBox++ % listBoxes.length];
        $(record).css('background', '#51E8E8');
        return;
      }
      highLight(listBoxes[startBox++ % listBoxes.length]);
      rand--;
    }, 50); // how fast it move to next div
  });

  function highLight(item) {
    $(item).css('background', 'red');
    setTimeout(() => {
      $(item).css('background', 'none');
    }, 50); // color stay on each div
  }


  const truths = [
    'What was the last thing you searched for on your phone?',
    'Have you ever walked in on your parents doing it?',
    'After you\'ve dropped a piece of food, what\'s the longest time you have left it on the ground and then ate it?',
    'Have you ever tasted a booger?',
    'Have you ever peed in the pool?',
    'Have you ever farted in an elevator?',
    'What are some things you think about when sitting on the toilet?',
    'Who would you hate to see naked?',
    'How long have you gone without brushing your teeth?',
    'What\'s one thing you would never eat on a first date?',
    'What have you seen that you wish you could unsee?',
    'If you could only text one person for the rest of your life, but you could never talk to that person face to face, who would that be?',
    'If you could be reincarnated into anyone\'s body, who would you want to become?',
    'What\'s the most useless piece of knowledge you know?',
    'Is it better to use shampoo as soap or soap as shampoo?',
    'What would be the worst part about getting pantsed in front of your crush?',
    'What\'s the best thing to say to your friend that would be the worst thing to say to your crush?',
    'If you could be invisible, who would you spy on?',
    'If you could date of your bro\'s girlfriends, who would it be?',
    'What your favorite body part?',
    'When was the last time you flexed in the mirror?',
    'Describe your perfect partner.',
    'Have you ever been in love?',
    'If your girlfriend/boyfriend hated your best friend, what would you do?',
    'Who is your biggest celebrity crush?',
    'What is your biggest turn-off?',
    'Have you ever been rejected by someone?',
    'When was the last time you cried?',

  ];
  const dares = [
    'Do an impression of your favourite relative, do not stop until everyone can guess who you are',
    'Act like the family pet until it is your turn again',
    'For the next 2 rounds, you must do whatever the person to your right says',
    'Quack and walk like a duck',
    'Do your best impression of Mickey Mouse',
    'Take a shot',
    'Run down the street in only your underwear',
    'Speak like Tony Montana for the next 10 minutes',
    'Give the person to your right a hickie',
    'Make a freestyle rap song about each person in the group',
    'Call someone random, and talk freaky to them',
    'Email one of your professor’s and tell them you love them',
    'Lick the wall',
    'Take two shots of a dark and a light liquor ( 4 shots total )',
    'Stand in the corner in “time out”, not say a word for the next 3 rounds',
    'Chug a whole beer in 15 seconds',
    'Chug an entire beer, then spin around for 15 seconds, after that try to run to the door',
    'Take 2 shots and do a cartwheel',
    'Call your parents and tell them you’re dropping out',
  ];
  function cardTruth() {
    const randomT = Math.floor(Math.random() * (truths.length));
    console.log(truths[randomT]);
    return truths[randomT];
  }

  function cardDare() {
    const randomD = Math.floor(Math.random() * (dares.length));
    console.log(dares[randomD]);
    return dares[randomD];
  }

  // https://nnattawat.github.io/flip/
  $('#cardt').flip({
    axis: 'y',
    trigger: 'click',
  });

  $('#cardt').click(() => {
    $('#cardt .back').text(cardTruth());
  });

  $('#cardd').flip({
    axis: 'y',
    trigger: 'click',
  });

  $('#cardd').click(() => {
    $('#cardd .back').text(cardDare());
  });
});


// https://www.codecademy.com/courses/a-simple-counter/0/1
// increment points
// trying get this to work
function scoreKeeping(val) {
  const pts = $('#pts').value;
  let newPts = parseInt(pts, 10) + val;

  if (newPts < 0) {
    newPts = 0;
  }

  pts.value = newPts;
  return newPts;
}

