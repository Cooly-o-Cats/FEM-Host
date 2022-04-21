let popButton = document.querySelector(`.share`)
let popOut = document.querySelector(`.share-pop`)
let darkIcon = document.querySelector(`.dark`)
let lightIcon = document.querySelector(`.light`)


function toggleShare() {
    // Adds Modal
    if( popOut.classList.contains(`active`)) {
        popOut.classList.remove(`active`)
    }
    else{
        popOut.classList.add(`active`)
    }
    
    // Changes Btn Background
    if( popButton.classList.contains(`share-click`)) {
        popButton.classList.remove(`share-click`)
    }
    else{
        popButton.classList.add(`share-click`)
    }

    // DarkIcon Show
    if ( darkIcon.classList.contains(`share-click-show`)) {
        darkIcon.classList.remove(`share-click-show`)
    }
    else{
        darkIcon.classList.add(`share-click-show`)
    }

    // DarkIcon Hide
    if ( darkIcon.classList.contains(`share-click-hide`)) {
        darkIcon.classList.remove(`share-click-hide`)
    }
    else{
        darkIcon.classList.add(`share-click-hide`)
    }

    // LightIcon Show
    if ( lightIcon.classList.contains(`share-click-show`)) {
        lightIcon.classList.remove(`share-click-show`)
    }
    else{
        lightIcon.classList.add(`share-click-show`)
    }

    // LightIcon Hide
    if ( lightIcon.classList.contains(`share-click-hide`)) {
        lightIcon.classList.remove(`share-click-hide`)
    }
    else{
        lightIcon.classList.add(`share-click-hide`)
    }
}

popButton.addEventListener('click', toggleShare)

