function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}

const url = "https://api.nasa.gov/planetary/apod?api_key=WY2YFUFZsyi7OVkxGdAnF7dPeq9TWiBhPAgO5JC8";

function getPicture() {
    fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        changeBackground(data.hdurl);
    });
}

getPicture();

const urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=WY2YFUFZsyi7OVkxGdAnF7dPeq9TWiBhPAgO5JC8";

function getMarsPicture() {
    fetch(urlMars)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        let pictureList = data.photos;
        createGallery(pictureList);
    });
}

let gallery = document.getElementById('content');

function createGallery(dataList) {
    let randomNumber = Math.floor(Math.random() * 847);
    console.log(randomNumber);
    for(let i=randomNumber; i < randomNumber+9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);
    }
}

getMarsPicture();
