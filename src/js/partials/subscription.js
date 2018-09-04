let subscrList = document.getElementById('purchaseOptions'),
    activeBlock;

subscrList.children[2].classList.add('focused');
activeBlock = subscrList.children[2];

subscrList.onclick = function(event) {
    event.preventDefault();
    let target = event.target;
    let li = target.closest('li');
    if(!li) return;

    activeBlock.classList.remove('focused');


    while (target !== this) {
        if (target.tagName === 'LI') target.classList.add('focused');
        activeBlock = target;
        target = target.parentNode;
    }
};


