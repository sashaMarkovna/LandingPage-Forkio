let wrapper = document.getElementById('wrapper'),
    dropdown = document.getElementById('dropdownMenu');

wrapper.onclick = function () {
    if(wrapper.classList.contains('wrapButton--active')) {
        wrapper.classList.remove('wrapButton--active');
        dropdown.classList.remove('menu--active');
    } else {
        wrapper.classList.add('wrapButton--active');
        dropdown.classList.add('menu--active');
    }
};