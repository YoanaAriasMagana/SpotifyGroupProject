// function playlistGenerator(){
// document.createElement('playlist')
// playlist.className= 'songs';


  let songArray = ["As It Was",
"Heat Waves",
"Hold My Hand",
"Moscow Mule",
"Favorite Part",
"Light Switch",
"Need to Know",
"Lost",
"Ghost",
"Flowers",
"When You’re Gone",
"Happier Than Ever"
];


  const songList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");


button.addEventListener("click", function () {
  // mixInfo(songArray);
  // songList.classList.remove("hide");
  // button.classList.add("hide");
  
mix.forEach(function (song, index) {
let li = document.createElement("li");
    li.classList.add("song");
 li.innerHTML =`<span class="song-number"> #${index + 1}</span> ${song}`;
     songList.append(li);
})
});
total.innerHTML= `${songArray.length} songs to enjoy!`;
  

  // const mixInfo = function (mix) {
    
    
//      mix.forEach(function (song, index) {
//     let li = document.createElement("li");
//     li.classList.add("song");
// li.innerHTML =`<span class="song-number"> #${index + 1}</span> ${song}`;
//      songList.append(li);

//   }
// total.innerHTML= `${songArray.length} songs to enjoy!`;


//   function displaySongs(){
// classList.toggle("visible");

    
//   }

//   function removeSong(){

// removeAttribute("songs")
    
//   }
// }