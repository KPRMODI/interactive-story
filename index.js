// defines variable to delete later
var elem = document.getElementById('Submit');
var elem2 = document.getElementById('Submit2');
var elem3 = document.getElementById("options")
var elem4 = document.getElementById("img1")
var elem5 = document.getElementById("img2")

Submit.onclick = function(){
    document.getElementById("img").src="zombiechase.webp"
    document.getElementById("paragraph1").textContent = "You choose to run away, however the zombies are now chasing you! What are you going to do?"
    document.getElementById("Submit").textContent = "Disguise yourself"

    document.getElementById("Submit2").textContent = "Continue Running away"
    document.getElementById("img1").src = "zombiedisguise.webp"
    document.getElementById("img2").src = "zombiechase.webp"
    Submit.onclick = function(){
        endingfunc()
        document.getElementById("paragraph1").textContent = "Surprisingly, this somehow works out? The zombies have actually started to worship you as a king of sorts due to your unique running skill and intelligence. You are NOW the zombie king. Was this a bad day after all?"
        document.getElementById("img").src = "zombieking.webp"
        document.getElementById("title").textContent = "The Zombie King Ending"
    }
    Submit2.onclick = function(){
        document.getElementById("Submit").textContent = "Attempt to Fight the Zombies"
        document.getElementById("Submit2").textContent = "Try and Befriend the Zombies. It's worth a shot, right?"
        document.getElementById("paragraph1").textContent = "You choose to run away again, maybe this is a good idea. However, they are still chasing after you. Make a decision quick!"
        document.getElementById("img1").src = "zombiefight.webp"
        document.getElementById("img2").src = "zombiepeace.webp"
        Submit.onclick = function(){
            endingfunc()
            document.getElementById("img").src = "humanlose.webp"
            document.getElementById("title").textContent = "Lost 1 Ending"
            document.getElementById("paragraph1").textContent = "What did you expect was going to happen? A sudden realization occurs of what a stupid idea it was to fight dozens of zombies chasing you. You've lost, and there's nothing you can do now."
        }
        Submit2.onclick = function(){
            endingfunc()
            document.getElementById("img").src = "zombiefriendending.webp"
            document.getElementById("title").textContent = "Good ending"
            document.getElementById("paragraph1").textContent = "This entire time in fact, the zombies were trying to be your friends. You're in shock, but relieved at the same time. Why do they want to be my friends? As the realization sinks in, the zombies light a fire and get marshmallows for some smores. Instead of questioning it, you decide to let everything go and enjoy your time with the zombies"
        }
    }
}

Submit2.onclick = function(){
    document.getElementById("img").src="zombiehide.webp"
    document.getElementById("paragraph1").textContent = "You deicde to hide in the school building for now, and hopefully find a way to survive with external help. It's been hours and you've become bored, what will you do now to pass on the time?"
    document.getElementById("Submit").textContent = "Decide to Go outside"

    document.getElementById("Submit2").textContent = "Explore the building"
    document.getElementById("img1").src = "exiting.jpeg"
    document.getElementById("img2").src = "explore.jpeg"

    Submit.onclick = function(){
        document.getElementById("img").src = "exitzombie.jpeg"
        document.getElementById("Submit").textContent = "Go Back in the School"
        document.getElementById("Submit2").textContent = "Play Dead"
        document.getElementById("paragraph1").textContent = "You decided to go outside and explore outside of the school. Oh no! Zombies are outside waiting for you. You have to act quick to save yourself!"
        document.getElementById("img1").src = "zombiefight.webp"
        document.getElementById("img2").src = "zombiepeace.webp"
    }
}


text.onclick = function(){
    location.href = "index.html"
}


function endingfunc(){
    let elements = [elem, elem2, elem3, elem4, elem5];

    for (let i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
    }
}

// elem.parentNode.removeChild(elem);
// elem2.parentNode.removeChild(elem2);
// elem3.parentNode.removeChild(elem3);
// img1.parentNode.removeChild(img1);
// img2.parentNode.removeChild(img2);


document.getElementById("Submit").addEventListener("mousemove", cursor)
document.getElementById("Submit2").addEventListener("mousemove", cursor)

function cursor(){ // Function to change cursor if it hovers over buttons
    document.getElementById("Submit").style.cursor = "pointer";
    document.getElementById("Submit2").style.cursor = "pointer";
}