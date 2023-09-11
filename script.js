/*
function removeActive () {
    for (image of document.querySelectorAll(".small-image")) {
        image.classList.remove("active");
    }
}


for (let image of document.querySelectorAll(".small-image")) {
    image.addEventListener("click", function(event) {
        var bigImage = document.querySelector(".big-image");

        bigImage.src = event.target.src;
        removeActive(); 
        image.classList.add("active");

    })
}
*/


// State

let elemek = [
    {
        id: uuidv4(),
        imageURL: "./img/image-1.jpg",
        title: "Céges programok",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-2.jpg",
        title: "Személyre szabott túrák",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-3.jpg",
        title: "Evezés",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-4.jpg",
        title: "Hegyi kalandok",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-5.jpg",
        title: "Könnyű gyalogtúrák",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-6.jpg",
        title: "Túrák Applikációval",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-7.jpg",
        title: "Hullámlovaglás",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },
    {
        id: uuidv4(),
        imageURL: "./img/image-8.jpg",
        title: "Kerékpártúrák",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    },

];

function arrayRotate(arr, count) {
    const ret = arr.slice();
    count -= ret.length * Math.floor(count / ret.length);
    ret.push.apply(ret, ret.splice(0, count));
    return ret;
  }

  window.onload = renderCards();



  function renderCards() {

    let elemekHTML = '';

    for (let elem of elemek.slice(0, 4)) {
        
        elemekHTML += `
        <div class="card">
        <div class="card-images">
            <img src="${elem.imageURL}" alt="card image" class="card-image">
        </div>
        <div class="card-icons">
            <a href="#"><i class="fas fa-clock card-icon"></i>21st may, 2022</a>
            <a href="#""><i class="fas fa-user card-icon"></i>by admin</a>
        </div>
        <div class="card-content">
            <h6 class="card-title">${elem.title}</h6>
            <p class="card-desc">${elem.desc}</p>
            <button class="btn card-btn" data-cardID="${elem.id}">Részletek</button>
        </div>
    </div>
        `;
    }

        document.getElementById("gallery-app").innerHTML = `
        <h6 class="heading">Válassz Hozzád Illő Túrát</h6>



        <div class="cards gutter--horizontal-big" id="elemek-kontener">

            <button id="prevButton" class="btn-arrow btn-left">&lt;</button>
            <button id="nextButton" class="btn-arrow btn-right">&gt;</button>
                ${elemekHTML}
        </div><!--cards-->

    </div>
        `;
        

   document.getElementById("prevButton").addEventListener("click", prevPage);
   document.getElementById("nextButton").addEventListener("click", nextPage);


    for (let detailsBtn of document.querySelectorAll(".card-btn")) {
        detailsBtn.addEventListener("click", function(event) {

            var id = event.target.dataset.cardid;

            var foundIndex;

            for (let index = 0; index < elemek.length; index++) {
                if (elemek[index].id === id) {
                    foundIndex = index;
                    break;
                }
            }

            document.querySelector(".highlight-image").src = elemek[foundIndex].imageURL;
            document.querySelector(".highlight-title").innerHTML = elemek[foundIndex].title;

        })
    }

  }


  function prevPage() {

    const container = document.getElementById("elemek-kontener");
    container.classList.add("to-right");
    container.ontransitionend = () => {
      elemek = arrayRotate(elemek, -4);
      renderCards();
      const container = document.getElementById("elemek-kontener");
      container.offsetHeight;
      container.classList.add("from-left");
      container.ontransitionend = () => {
        container.classList.remove("from-left");
      };
    };

 }

  function nextPage() {

    const container = document.getElementById("elemek-kontener");
    container.classList.add("to-left");
    container.ontransitionend = () => {
      elemek = arrayRotate(elemek, 4);
      renderCards();
      const container = document.getElementById("elemek-kontener");
      container.offsetHeight;
      container.classList.add("from-right");
      container.ontransitionend = () => {
        container.classList.remove("from-right");
      };
    };

  }



  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }



