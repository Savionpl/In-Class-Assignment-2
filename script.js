// script.js - Let's add some interactivity to make our web development journey exciting!

document.getElementById('funButton').addEventListener('click', function() {
    const funText = document.getElementById('funText');
    funText.innerHTML = '🎉 Congratulations on taking your first step into web development with CS 140! 🎉';
});

let favoriteColor = "blue";

console.log(favoriteColor);

alert(favoriteColor);

if (favoriteColor === "blue") {
    console.log("Your favorite color is blue!");
}

