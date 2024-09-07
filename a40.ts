// ALBUM

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist_name: string, album_title: string, tracks?: number): Album {
    let album: Album = { artist: artist_name, title: album_title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Creating album objects
let album1: Album = make_album("Atif Aslam", "Doorie");
let album2: Album = make_album("Ali Zafar", "Jhoom", 9);
let album3: Album = make_album("Shahzad Roy", "Teri Soorat");

// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);