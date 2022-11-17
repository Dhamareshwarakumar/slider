let move_right = (scrollLength, items, leftHiddenItems) => {
    let currentPosition = leftHiddenItems * -scrollLength;
    if (leftHiddenItems > 0) {
        leftHiddenItems -= 1;
        console.log('moving right', currentPosition, leftHiddenItems);
        for (const i of items) {
            i.style.left = currentPosition + scrollLength + 'px';
        }
    }
    return leftHiddenItems;
}

let move_left = (scrollLength, items, leftHiddenItems) => {
    const itemsOnPage = Math.floor(window.innerWidth / items[0].offsetWidth)
    let currentPosition = leftHiddenItems * -scrollLength;
    if (leftHiddenItems < (items.length - itemsOnPage)) {
        leftHiddenItems += 1;
        console.log('moving left', currentPosition, leftHiddenItems);
        for (const i of items) {
            i.style.left = currentPosition - scrollLength + 'px';
        }
    }
    return leftHiddenItems;
};

let reset = (scrollLength, items, leftHiddenItems) => {
    const itemsOnPage = Math.floor(window.innerWidth / items[0].offsetWidth)
    if (leftHiddenItems > items.length - itemsOnPage) {
        leftHiddenItems = items.length - itemsOnPage;
        console.log('Weird', leftHiddenItems);
    }

    let currentPosition = leftHiddenItems * -scrollLength;
    for (const i of items) {
        i.style.left = currentPosition + 'px';
    }
    return leftHiddenItems;
}


let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');
let items = document.querySelectorAll('.itemContainer');

let leftHiddenItems = 0;
let scrollLength = items[0].offsetWidth;

leftArrow.addEventListener('click', () => {
    leftHiddenItems = move_right(scrollLength, items, leftHiddenItems);
});

rightArrow.addEventListener('click', () => {
    leftHiddenItems = move_left(scrollLength, items, leftHiddenItems);
});

addEventListener("resize", (event) => {
    scrollLength = document.querySelectorAll('.itemContainer')[0].offsetWidth;
    leftHiddenItems = reset(scrollLength, items, leftHiddenItems);
});