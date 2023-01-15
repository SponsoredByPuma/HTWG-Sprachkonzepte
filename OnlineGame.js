var Colors = {
    Red: "Red",
    Blue: "Blue",
    Green: "Green",
    Yellow: "Yellow",
    Violett: "Violett",
    White: "White",
    Black: "Black",
    Brown: "Brown"
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let triesToVictory = 0;

async function pressButton() {
    let img = document.getElementById("resultPicture");
    let randomNumber = getRandomInt(Object.keys(Colors).length);
    let correctColor = Object.keys(Colors)[randomNumber];
    let userColor = document.getElementById('colorTxt').value;
    document.getElementById('textResult').innerHTML = '';
    img.src = "https://media.tenor.com/AF6IU59LvLAAAAAC/marblecards-wheel.gif";
    img.height = 800;
    img.width = 800;
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (correctColor === userColor) {
        document.getElementById('textResult').innerHTML = 'You won. It took ' + triesToVictory + " tries";
        if (triesToVictory < 3) {
            img.src = "https://media.tenor.com/epNMHGvRyHcAAAAd/gigachad-chad.gif";
            img.height = 800;
            img.width = 800;
        } else {
            img.src = "https://i.kym-cdn.com/entries/icons/original/000/032/562/iplcoialdcw31.jpg";
            img.height = 800;
            img.width = 800;
        }
        triesToVictory = 0;
    } else {
        document.getElementById('textResult').innerHTML = 'You lost. The correct color was: ' + correctColor;
        switch (triesToVictory) {
            case 0:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_1.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 1:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_2.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 2:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_8.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 3:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_9.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 4:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_11.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 5:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_10.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 6:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_13.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 7:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_14.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 8:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_16.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            case 9:
                img.src = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_15.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200";
                break;
            default:
                img.src = "https://media.tenor.com/r73od8P4aNgAAAAd/suicide-wednesday.gif";
                break;
        }
        img.height = 800;
        img.width = 800;

        triesToVictory = triesToVictory + 1;
    }
}
// dynamische typisierung | Implizit typisierte Variablen
// automatische Speicherverwaltung durch die initalisierung von variablen
// keine main
// keine klasse
// variablen
// einfachen source code haben
