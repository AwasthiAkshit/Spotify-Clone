
let songs = [];
async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let res = await a.text();
    let d = document.createElement("div");
    d.innerHTML = res
    let so = d.getElementsByTagName("a");
    for (let i = 0; i < so.length; i++) {
        let ele = so[i];
        if (ele.href.endsWith(".mp3")) {
            console.log(ele);
            songs.push(ele.href);
        }
    }
    console.log(songs);
}
async function main() {
    await getsongs();
    let songsUl = document.querySelector(".lib-content").getElementsByTagName("ul")[0];
    for(let i=0;i<songs.length;i++){
    songsUl.innerHTML = songsUl.innerHTML+`<li>${songs[i].slice(28).replaceAll("%","").replaceAll("20"," ")}</li>`
    }
    var audio = new Audio(songs[0]);
    // audio.play();
}
main()


