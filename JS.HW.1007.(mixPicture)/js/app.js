(function (){

    const add = document.querySelector('#add');
    const mixed = document.querySelector('#mixed');
    const pictures = document.querySelector('.pictures');

    let imgs = [];
    let img1 = new Image()
    img1.src = '../img/w1.jpg';
    img1.alt = 'w1';
    let img2 = new Image()
    img2.src = '../img/w2.jpg';
    img2.alt = 'w2';
    let img3 = new Image()
    img3.src = '../img/w3.jpg';
    img3.alt = 'w3';
    let img4 = new Image()
    img4.src = '../img/w4.jpeg';
    img4.alt = 'w4';
    let img5 = new Image()
    img5.src = '../img/w5.jpg';
    img5.alt = 'w5';
    let img6 = new Image()
    img6.src = '../img/s1.jpg';
    img6.alt = 's1';
    let img7 = new Image()
    img7.src = '../img/s2.jpg';
    img7.alt = 's2';
    let img8 = new Image()
    img8.src = '../img/s3.png';
    img8.alt = 's3';
    let img9 = new Image()
    img9.src = '../img/s4.jpg';
    img9.alt = 's4';
    let img10 = new Image()
    img10.src = '../img/s5.jpg';
    img10.alt = 's5';
    imgs.push(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10);


    add.addEventListener('click',showPic);
    //mixed.addEventListener("click", mixedPic);

    function showPic() {
        for (let i=0; i<imgs.length; i++) {
            pictures.appendChild(imgs[i]);
        }
        add.disabled = true;
        if ( add.disabled === true) {
            add.style.backgroundColor = '#cdd4cf'
            mixed.style.backgroundColor = '#00bfff'
            mixed.addEventListener("click", mixedPic);
            function mixedPic () {
                let sortImg = imgs.sort(function () { return 0.5 - Math.random()});
                for (let i=0; i<sortImg.length; i++) {
                    pictures.appendChild(sortImg[i]);
                }
            }
        }
    }
})();
