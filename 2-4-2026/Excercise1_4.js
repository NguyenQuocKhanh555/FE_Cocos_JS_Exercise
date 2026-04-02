function GetExtension(filename) {
    if (!filename) return "";

    const parts = filename.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : "";
}

console.log(GetExtension("image.png"));
console.log(GetExtension("Sound.mp3"));