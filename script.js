function openGift() {
   
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

   
    setTimeout(() => {
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 250);

   
    document.getElementById('gift-container').classList.add('hidden');
    document.getElementById('title').style.display = 'none';
    document.getElementById('message').style.display = 'none';

    const surprise = document.getElementById('surprise-content');
    surprise.classList.remove('hidden');
}
function revealMessage() {
    
    document.getElementById('message-btn').classList.add('hidden');
    
    
    const personalMsg = document.getElementById('personal-message');
    personalMsg.classList.remove('hidden');

    
    confetti({
        particleCount: 40,
        spread: 50,
        colors: ['#ff9a9e', '#fecfef', '#ff4b2b']
    });
}
function revealMessage() {
    
    document.getElementById('message-btn').style.display = 'none';
    
    
    const personalMsg = document.getElementById('personal-message');
    personalMsg.classList.remove('hidden');

    
    setTimeout(() => {
        const finalLink = document.getElementById('final-link');
        finalLink.classList.remove('hidden');
        
       
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.8 }
        });
    }, 1500); 
}