'use strict';

var userPoints = 0;
var userBonus = 0;
var userAttempts;
var bonusQuestion;
var answers = [];
var music = ['bassoon', 'saxophone', 'guitar', 'piano'];


console.log('User has connected to the site');
alert('Come on, come all to my guess game crawl');
console.log(answers);

var user = prompt('I\'d like to know your name!', 'type your name');
console.log('user will now be referred to as ' + user);
console.log(user + ' currently has ' + userPoints + ' points');
console.log(user + ' attempts left: ' + userAttempts);

alert('Welcome ' + user + '! I hope you are ready to play a game.');
alert('Here there will be a series of questions about me. Who am I? Well my name is Eric. Good luck ' + user + '!');

userAttempts = 3;

while(userAttempts > 0) {
  console.log(userAttempts);
  answers.push(prompt('First Question: Am I a musician?', 'type yes or no').toLowerCase());
  console.log(user + ' has answered ' + answers[0]);

  if(answers[0] === 'yes' || answers[0] === 'y') {      
    break;
  } else {
    userAttempts--;
    console.log(user + ' attempts left: ' + (userAttempts - 3));
    switch(userAttempts) {
    case 2:
      answers.pop();
      alert('Hmm, try again '+ user + '!');
      break;
    case 1:
      answers.pop();
      alert('Really...there are only two possible answers.');
      break;
    default:
      alert('Lets just move on...');
      break;
    }
  }
}

userAttempts = 3;

if(answers[0] === 'yes' || answers[0] === 'y') {

  alert('Hooray! You did it ' + user + '. I am in fact a musician! Originally I studied Classical Bassoon and Jazz Saxophone but now I just kinda play whatever I pick up when I need to do some sound design or composition! Enjoy your delicious point');
  userPoints++;
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
} else {
  alert('Sorry you got this one wrong. I am a musician and originally studied Classical Bassoon and Jazz Saxophone. Now I just play whatever I pick up when I need to do sound design or compose. Hopefully you can guess better next time!');
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
}

console.log(answers);
alert('Alright lets move on to the next question! Here we go!');

while( userAttempts > 0) {

  answers.push(prompt('Am I an incredibly geeky person? Yeah you probably don\'t know who I am so flip a coin. Coins are unbiased right?', 'type yes or no').toLowerCase());
  console.log(user + ' has answered with ' + answers[1]);

  if(answers[1] === 'yes' || answers[1] === 'y') {
    break;
  } else {
    userAttempts--;
    console.log(user + ' attempts left: ' + userAttempts);
    switch(userAttempts) {
    case 2:
      answers.pop();
      alert('Naaaaaaaaaaaaaaaaah. '+ user + ' give it another go!');
      break;
    case 1:
      answers.pop();
      alert('Still trying to not answer huh');
      break;
    default:
      alert('That\'s cool. I\'ll just move the script along');
      break;
    }
  }
}

userAttempts = 3;

if(answers[1] === 'yes' || answers[1] === 'y') {  
  alert('Yup you would be correct, or that coin was correct or however your preferred method of guessing...um...guessed. I come from a comic book family, playing board games, role playing, super heroes, sci-fi space western...you name it. It\'s a lot of fun to have an active imagination! Point for you!');
  userPoints++;
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
} else {
  alert('hmm, that wasn\'t a super fair question. Plus it was out of the blue and a lot of pressure to just judge something pretty random. I\'m sorry. So get ready for another one!');
  alert('attempts all gone, it\'s okay. I will give you more so you can play!');
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
}
console.log(answers);

alert('Cool feeling good? Sweet.');
while( userAttempts > 0) {

  answers.push(prompt('Do I have any siblings?', 'type yes or no').toLowerCase());
  console.log(user + ' has answered with ' + answers[2]);  
  if(answers[2] === 'yes' || answers[2] === 'y') {
    break;
  } else {
    userAttempts--;
    console.log(user + ' attempts left: ' + userAttempts);
    switch(userAttempts) {
    case 2:
      answers.pop();
      alert('Nope!');
      break;
    case 1:
      answers.pop();
      alert('Sigh...I have to type it since I can\'t convey it with audio yet');
      break;
    default:
      alert('do do doooo do doo...oh? Still didn\'t answer? Alrighty moving forward!');
      break;
    }
  }
}

userAttempts = 3;

if(answers[2] === 'yes' || answers[2] === 'y') {

  alert('You got it! I have one younger brother who is currently finishing up his third year of college.');
  userPoints++;
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
  bonusQuestion = prompt('pssssssssssst....hey ' + user + '! Wanna get a bonus point?', 'type yes or no').toLowerCase();
  console.log(user + ' answered ' + bonusQuestion);
  if(bonusQuestion === 'yes' || bonusQuestion === 'y') {
    userBonus++;
    alert('That was it! You did it ' + user + '! Enjoy free stuff!');
    console.log(user + ' points: '  + userPoints + ' bonus points: ' + userBonus);
  } else {
    alert('Oh that is cool too. Yeah I don\'t need bonus points either. Just asking for a friend');
    console.log(user + ' points: ' + userPoints);
    console.log(user + ' attempts left: ' + userAttempts);
  }
} else {
  alert('hmm, nope! I do have a younger brother who is finishing up his third year in college');
  alert('resetting attempts....loading');
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
}

console.log(answers);

while( userAttempts > 0) {

  answers.push(prompt('Curveball! Am I a super secret ninja plotting to take over the world??').toLowerCase());
  console.log(user + ' has answered with ' + answers[3]);

  if(answers[3] === 'no' || answers[3] === 'n') {      
    break;
  } else {
    userAttempts--;
    console.log(user + ' attempts left: ' + userAttempts);
    switch(userAttempts) {
    case 2:
      answers.pop();
      alert('Hmm, try again '+ user + '!');
      break;
    case 1:
      answers.pop();
      alert('***RECYCLING MESSAGE***INSERT SOMETHING WITTY***');
      break;
    default:
      alert('404');
      console.log('faking a broken script');
      break;
    }
  }
}

console.log('set userAttempts for the 6th question');
userAttempts = 4;

if(answers[3] === 'no' || answers[3] === 'n') {
  alert('well ' + user + ', I guess that wasn\'t much of a curveball huh...fine here is your point. I may not be a ninja but along side my Tai Chi instructor Certificate, I have taken Kung Fu, Muay Tai kickboxing, Savant Kickboxing and Jeet Kune Do. I like hitting things what can I say!');
  userPoints++;
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);

} else {
  console.log(user + ' points: ' + userPoints);
  console.log(user + ' attempts left: ' + userAttempts);
}

console.log(answers);

alert('Alright ' + user + ', Everything is on this last question. Everything before means nothing now. All your points are belong to me!');
alert('If you get this question right, you win. If you get it wrong, well you don\'t win.');
answers[4] = prompt('Am I colorblind?', 'type yes or no').toLowerCase();
console.log(user + ' has answered ' + answers[4]);

if(answers[4] === 'yes' || answers[4] === 'y') {   
  userPoints++;
  alert('Wow ' + user + '! Either you know me pretty well or that was a good guess! (probably a guess cause well...this is a guessing game)');
  console.log(user + ' points: ' + userPoints);
} else {
  switch(userBonus) {
  case 1:
    alert('Hah jokes on you I AM colorblind. I will eat all your points nom nom nom nom nom.');
    alert('NOOOOOO you\'ve foiled me! How could I forget about the bonus point! Nothing beats the bonus point! Curses! Well I guess you still have some points left!');
    break;
  default:
    alert('Nope, I am definitely colorblind. It\'s a really interesting conversation to have!');
    alert('Hah, you have nothing. I took everything. I am the better guesserer about myself. So what if I cheated and made the program this way');
    break;
  }
}

console.log(answers);

alert('Alright ' + user + ', I kinda lied. I added more but I really wanted to keep that sense of misdirection. Here comes a guessing game, inside of a guessing game! We call it....guess-ception');

while (userAttempts > 0) {

  var number = '26';
  var guess = prompt('Guess what number I was thinking at the time I was writing this script! I\'ll give you a hit, the number is between 10 and 40. You have ' + userAttempts + '!');
  var compare = '';
  console.log(guess);
  if(isNaN(guess) === true) {
    alert('OH looks like you didn\'t type a number. I only accept integers!');
  } else {
    if(guess === number) {
      answers.push(guess);
      break;
    } else {
      userAttempts--;
      switch(userAttempts) {
      case 3:
        if(guess > 26) {
          alert('Good number but you are too high');
        } else {
          alert('Good number, but you are too low');
        }
        compare = guess;
        break;
      case 2:
        if(guess > 26 && guess < compare) {
          alert('Oh man looks like you are getting closer!');
        } else if (guess < 26 && guess > compare) {
          alert('Oh man you are getting closer!');
        } else if (guess < 26 && guess < compare) {
          alert('Oh you overshot and went too low!');
        } else {
          alert('Went to high up! Try again!');
        }
        compare = guess;
        break;
      case 1:
        if(guess > 26 && guess < compare) {
          alert('Oh man looks like you are getting closer!');
        } else if (guess < 26 && guess > compare) {
          alert('Oh man you are getting closer!');
        } else if (guess < 26 && guess < compare) {
          alert('Oh you overshot and went too low!');
        } else {
          alert('You are still too high!');
        }
        break;
      default:
        answers.push(guess);
        alert('Oh no, you are all out of attempts! Good effort though!');
        break;
      }
    }
  }
}
console.log(answers);
userAttempts = 6;

if(answers[5] === '26') {
  userPoints++;
  alert('Woo you guessed it right! I picked 26 because my birthday is at the end of the month and that is how old I will be!');
} else {
  alert('Nice try ' + user + '! The number is actually 26. I turn 26 at the end of the month!');
}

userAttempts = 6;

alert('Alright ' + user + ' now we are on the last question.');
alert('I mentioned earlier in the game that I am a musician. I also compose music and do sound design for various projects in my spare time!');

while(userAttempts > 0) {
  var guess2 = prompt('What instruments do I play? There are multiple answers possible!').toLowerCase();
  for(var i = 0; i < music.length; i++){
    music[i];
    if(guess2 === music[i]) {
      alert('you did it!');
      answers.push();
      userAttempts = 0;
      userPoints++;
      break;
    }
  }
  if(guess2 !== 'bassoon' || guess2 !== 'saxophone' || guess2 !== 'guitar' || guess2 !== 'piano'){
    userAttempts--;
    switch(userAttempts) {
    case 5:
      alert('Nope try again! Attempts remaining: ' + userAttempts);
      break;
    case 4:
      alert('Keep trying! I believe in you! Attempts remaining: ' + userAttempts);
      break;
    case 3:
      alert('Here is a hint: I said two of them in a previous question! Attempts remaining: ' + userAttempts);
      break;
    case 2:
      alert('Keep on keeping on! Attempts remaining: ' + userAttempts);
      break;
    case 1:
      alert('Nooooooooooooooooooooooooo almost out of timmmmmeeeee! Attempts remaining: ' + userAttempts);
      break;
    default:
      alert('That is it! You are all done!');
      answers.push(guess2);
      break;
    }
  }
}

alert('Hope you enjoyed this javascript guessing game and learned something     about me! Lets see where you ended up with points!');
var finalScore = userPoints + userBonus;
console.log('add user points and bonus points');
console.log(finalScore);

if(finalScore > 0) {
  alert(user + ' you ended with a final score of ' + finalScore + '. You win! Anything above 0 wins!!!!');
} else {
  alert('Oh no! I stole your points away! It\'s okay ' + user + '. You still win. Nobody loses here!');
}
console.log('end of the javascript stuff');