let carousel = document.getElementById('carousel'),
    elemsList = document.getElementById('elemsList'),
    rectLi = elemsList.children[0].getBoundingClientRect(),
    rectBlock = carousel.getBoundingClientRect(),
    elemWidth = rectLi.width,
    position = 0,
    activeLi,
    interval,
    timeout;

function showPrev() {

    if(!activeLi) activeLi = elemsList.children[0];

    let prev = activeLi.previousElementSibling;

    if (!prev) {
        prev = elemsList.lastElementChild;
        elemsList.removeChild(prev);
        elemsList.insertBefore(prev, elemsList.firstChild);
    }
    let prevLeftCoords = prev.getBoundingClientRect().left;

    if ( prevLeftCoords < rectBlock.left ) {
        position += elemWidth;
        elemsList.style.marginLeft = position + 'px';
    }
    activeLi = prev;
}

function showNext() {

    if(!activeLi) activeLi = elemsList.children[0];

    let next = activeLi.nextElementSibling;

    if (!next) {
        next = elemsList.children[0];
        elemsList.removeChild(next);
        elemsList.appendChild(next);
    }
    let nextRightCoords = next.getBoundingClientRect().right;

    if ( nextRightCoords > rectBlock.right ) {
        position -= elemWidth;
        elemsList.style.marginLeft = position + 'px';
    }
    activeLi = next;
}

function intervalShow(func, sec) {
    interval = setInterval(func, sec);
}

function setNewInterval(func) {
    clearTimeout(timeout);
    clearInterval(interval);
    timeout = setTimeout( intervalShow, 3000, func, 2500 );
}

carousel.querySelector('.carousel__nextBtn').onclick = function () {
    showNext();
    setNewInterval(showNext);
};

carousel.querySelector('.carousel__prevBtn').onclick = function () {
    showPrev();
    setNewInterval(showPrev);
};

intervalShow( showNext, 3000 );


