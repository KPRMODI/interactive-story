try{ // try block for error handling 
    // defines variables to delete later when the ending occurs
    var elem = document.getElementById('Submit');
    var elem2 = document.getElementById('Submit2');
    var elem3 = document.getElementById("options")
    var elem4 = document.getElementById("img1")
    var elem5 = document.getElementById("img2")

    // Variables for the nuke ending, one is for audio and the code is for the if statement.
    let nukecodeteller = false
    let nukecode = "23713";
    var nukesound = new Audio('nukesound.mp3');

    // if the first option is clicked on it runs this function which goes over the path for the first option.
    Submit.onclick = function(){
        document.getElementById("img").src="zombiechase.webp" 
        document.getElementById("paragraph1").textContent = "You choose to run away, however the zombies are now chasing you! What are you going to do?"
        document.getElementById("Submit").textContent = "Disguise yourself" // first option

        document.getElementById("Submit2").textContent = "Continue Running away" // second option
        document.getElementById("img1").src = "zombiedisguise.webp"
        document.getElementById("img2").src = "zombiechase.webp"
        Submit.onclick = function(){ //if first option is selected, run the Zombie King Ending 
            endingfunc()
            document.getElementById("paragraph1").textContent = "Surprisingly, this somehow works out? The zombies have actually started to worship you as a king of sorts due to your unique running skill and intelligence. You are NOW the zombie king. Was this a bad day after all?"
            document.getElementById("img").src = "zombieking.webp"
            document.getElementById("title").textContent = "The Zombie King Ending"

        }
        Submit2.onclick = function(){ // if second option of running away give more options
            document.getElementById("Submit").textContent = "Attempt to Fight the Zombies"
            document.getElementById("Submit2").textContent = "Try and Befriend the Zombies. It's worth a shot, right?"
            document.getElementById("paragraph1").textContent = "You choose to run away again, maybe this is a good idea. However, they are still chasing after you. Make a decision quick!"
            document.getElementById("img1").src = "zombiefight.webp"
            document.getElementById("img2").src = "zombiepeace.webp"
            Submit.onclick = function(){ //first option of trying to find zombies
                endingfunc()
                document.getElementById("img").src = "humanlose.webp"
                document.getElementById("title").textContent = "Bad Ending"
                document.getElementById("paragraph1").textContent = "What did you expect was going to happen? A sudden realization occurs of what a stupid idea it was to fight dozens of zombies chasing you. You've lost, and there's nothing you can do now."
            }
            Submit2.onclick = function(){ // other ending of becoming the zombies friends 
                endingfunc()
                document.getElementById("img").src = "zombiefriendending.webp"
                document.getElementById("title").textContent = "Good ending"
                document.getElementById("paragraph1").textContent = "This entire time in fact, the zombies were trying to be your friends. You're in shock, but relieved at the same time. Why do they want to be my friends? As the realization sinks in, the zombies light a fire and get marshmallows for some smores. Instead of questioning it, you decide to let everything go and enjoy your time with the zombies"
            }
        }
    }

    Submit2.onclick = function(){ // the second first option of hiding inside of the school 
        document.getElementById("img").src="zombiehide.webp"
        document.getElementById("paragraph1").textContent = "You deicde to hide in the school building for now, and hopefully find a way to survive with external help. It's been hours and you've become bored, what will you do now to pass on the time?"
        document.getElementById("Submit").textContent = "Decide to Go outside"

        document.getElementById("Submit2").textContent = "Explore the building"
        document.getElementById("img1").src = "exiting.jpeg"
        document.getElementById("img2").src = "explore.jpeg"

        Submit.onclick = function(){ // option of going outside the school
            document.getElementById("img").src = "exitzombie.jpeg"
            document.getElementById("Submit").textContent = "Go Back in the School"
            document.getElementById("Submit2").textContent = "Play Dead"
            document.getElementById("paragraph1").textContent = "You decided to go outside and explore outside of the school. Oh no! Zombies are outside waiting for you. You have to act quick to save yourself!"
            document.getElementById("img1").src = "enterbuildingagain.jpeg"
            document.getElementById("img2").src = "playdead.jpeg"
            Submit.onclick = function(){ // being saved ending 
                endingfunc()
                document.getElementById("img").src = "militaryending.jpeg"
                document.getElementById("title").textContent = "Saved Ending"
                document.getElementById("paragraph1").textContent = "You enter back into the school and hide from the zombies. You wait for hours and hours until the military arrives. You are now saved, congratulations!"
            }
            Submit2.onclick = function(){ //humiliation ending 
                endingfunc() 
                document.getElementById("img").src = "zombieslaughing.webp"
                document.getElementById("title").textContent = "Humiliation Ending"
                document.getElementById("paragraph1").textContent = "Total Humiliation. Just when you thought you were getting eaten, the zombies start hysterically laughing at you. They caught onto your game. It seems they have high intelligence, and instead of being physically damaged, you are now mentally traumatized due to the emotional bullying of the zombies. Who knew they could cause something like this to humans?"
            }
        }
        Submit2.onclick = function(){ // if exploring option if piccked 
            document.getElementById("img").src = "nuclearbutton.jpeg"
            document.getElementById("Submit").textContent = "Do Nothing"
            document.getElementById("Submit2").textContent = "Launch Nuke To Save Humanity"
            document.getElementById("paragraph1").textContent = "While walking around you enter a strange room. You see a large red button with a code next to it which reads 23713. You wonder what this is even doing here, but then realize your school was actually crazy and had several problems. Should I enter the code?"
            document.getElementById("img1").src = "donothing.webp"
            document.getElementById("img2").src = "manpressnuke.webp"

            Submit.onclick = function(){ // schizophrenic ending
                endingfunc()
                document.getElementById("title").textContent = "Schizophrenic Ending! You are now insane!"
                document.getElementById("img").src="shizophrenia.jpeg"
                document.getElementById("paragraph1").textContent="You decided to quite literally do nothing and just sit still. The nuclear button is still in the school, yet you haven't touched it. Eventually, the military comes and saves you, however by the time they arrived you got extremely paranoid and ended up developing schizophrenia. You now see things at random times and regret doing nothing with your life. Maybe you should have done something to have avoided this fate"
            }
            Submit2.onclick = function(){ // nuke ending
                endingfunc()
                while (nukecodeteller != true){ // when the nuke code isint correct repeat this code 
                    userGuess = (prompt("Enter The nuclear code: "));
                    if (userGuess == nukecode){
                        nukecodeteller = true
                    }
                document.getElementById("paragraph1").textContent="Now press the button to launch the nuke (press down a key to launch the nuke)"
                document.addEventListener("keypress",  function keydown1(){ // user has to press a key down to activate nuke
                    nukesound.play()
                    document.getElementById("title").textContent="Sacrificial Nuke Ending"
                    document.getElementById("img").src="nuke.gif"
                    document.getElementById("paragraph1").textContent = "You launch a nuke to kill all of the zombies, but in the process sacrifice yourself as well. Unknown to you, you wiped out all of the zombies due to the outbreak only being in your relative area. Many call you a hero while some oppose the use of nuclear weapons on school grounds. Speaking of nuclear weapons, why was a nuclear button in a school?"
                    })
                }
            }
        }

    }

    text.onclick = function(){ // returns to index to reset story
        location.href = "index.html"
    }

    function endingfunc(){ // the essence of all the endings. It takees elements from submit buttons and images and temporarily deletes them using a for loop with the list below 
        let elements = [elem, elem2, elem3, elem4, elem5];

        for (let i = 0; i < elements.length; i++) {
                elements[i].parentNode.removeChild(elements[i]);
        }
    }
    // if mouse hovers over submit button, change the cursor style 
    document.getElementById("Submit").addEventListener("mousemove", cursor)
    document.getElementById("Submit2").addEventListener("mousemove", cursor)

    function cursor(){ // Function to change cursor if it hovers over buttons
        document.getElementById("Submit").style.cursor = "pointer";
        document.getElementById("Submit2").style.cursor = "pointer";
    }
}
catch{ // if theres an error this catches and handles the error
    endingfunc()
    document.getElementById("paragraph1").textContent = "You got an Error! somehow... just try and refresh"
}