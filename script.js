const banners = [
    "https://via.placeholder.com/1200x300/2874f0/ffffff",
    "https://via.placeholder.com/1200x300/f02828/ffffff",
    "https://via.placeholder.com/1200x300/28a745/ffffff"
];

let index = 0;

setInterval(() => {
    document.getElementById("banner-img").src = banners[index];
    index = (index + 1) % banners.length;
}, 3000);
