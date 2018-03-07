
function myFunction(e) {
    var element = e.currentTarget.id,
        childItem = document.getElementById(element).children,
        childId = childItem[0].id;

    toggleModal(childId)
}

function  toggleModal(id) {
    var caption;
    switch (id){
        case 'zeland_1':
            caption = 'Lake Wakatipu';
            break;
        case 'zeland_2':
            caption = 'Lake Kai';
            break;
        case 'zeland_3':
            caption = 'Doubtful Sound';
            break;
        case 'zeland_4':
            caption = 'Sun Rize';
            break;
    }
    var modal = document.getElementById('myModal'),
        img = document.getElementById(id),
        modalImg = document.getElementById("preview"),
        captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = img.currentSrc;
        captionText.innerHTML = caption;

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
}

