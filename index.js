let ending = false
var elem = document.getElementById('Submit');
var elem2 = document.getElementById('Submit2');
var elem3 = document.getElementById("options")
var elem4 = document.getElementById("img1")
var elem5 = document.getElementById("img2")


Submit.onclick = function(){
    document.getElementById("img").src="zombie2.jpg"
    document.getElementById("paragraph1").textContent = "You choose to run away, however the zombies are now chasing you! What would you do?"
    document.getElementById("Submit").textContent = "Disguise yourself"

    document.getElementById("Submit2").textContent = "Continue Running away"
    Submit.onclick = function(){
        endingfunc()
        document.getElementById("paragraph1").textContent = "Zombie Crown Ending!"
        document.getElementById("img").src = "zombieking.webp"
    }
    Submit2.onclick = function(){
        document.getElementById("paragraph1").textContent = "Fortnite ending"
    }
}

Submit2.onclick = function(){
    document.getElementById("img").src="zombieapoc1.jpg"
}


text.onclick = function(){
    location.href = "index.html"
}


function endingfunc(){
    elem.parentNode.removeChild(elem);
    elem2.parentNode.removeChild(elem2);
    elem3.parentNode.removeChild(elem3);
    img1.parentNode.removeChild(img1);
    img2.parentNode.removeChild(img2);
}




document.getElementById("Submit").addEventListener("mousemove", cursor)
document.getElementById("Submit2").addEventListener("mousemove", cursor)

function cursor(){
    document.getElementById("Submit").style.cursor = "pointer";
    document.getElementById("Submit2").style.cursor = "pointer";
}