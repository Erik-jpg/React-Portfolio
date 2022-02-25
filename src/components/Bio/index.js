import React from 'react';

function Bio() {
    return (
        <>
        <img className="ProfilePhoto" style={{ height:"25%", width:"25%" }} src='https://i.ibb.co/GWPPR8t/23668509-841127372723775-9055571650329706496-n.jpg' alt="MyFace2" />
        <div>
            <p className="BioDescription">
                About me. 
                I try to be honest without being brutal, especially to myself. 
                Using this method, I have found that I tend to have better relationships with the people in a professional and casual settings.
            </p>
            <p className="BioEntertainment">
                Entertainment. 
                I have read a lot of comics when I was a child and grew up playing a lot of video games. 
                I still play some video games, mostly strategy games or games for nostalgia sake, as well as playing board games and table top games.            
                I enjoy reading, writing, talking, listening, discussing ideas.
                Other forms of entertainment are: Playing my guitar, making homebrew beer and mead, family, friends, and brain teasers/ puzzles. 
            </p>
            <p className="BioCareer">
                I really enjoy logic puzzles and brain teasers, and that is why I found myself drawn to learning to code and trying to make a career out of it. 
                During the summer of 2020, I was talking to a friend and they told me about the coding boot camp that the University of Oregon offered. 
                I thought it would be fun and a great challenge. It was fun and I feel that I have met some good people that I was happy to learn with. 
            </p>
        </div>
        </>
    );
}

export default Bio;