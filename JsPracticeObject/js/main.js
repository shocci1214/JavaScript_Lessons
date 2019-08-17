'use strict';

{
    const player = {
        name: 'shocci', 
        score: 52
    };
    console.log(player.name);
    console.log(player['name']);
    player.score = 100;
    console.log(player);

    player.email = 'shocci1214@gmail.com';
    console.log(player);

    delete player.score;
    console.log(player);
    // const scores = [80, 90, 40];
    // console.log(scores[1]);
    // scores[2] = 100;
    // console.log(scores)
    // //   scores = 1;
    // console.log(scores.length);
}
