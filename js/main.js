window.addEventListener('load', init)

//Global vars
let apiUrl = './webservice'
const sideNav = document.querySelector(".sideNav")
const overlay = document.querySelector(".overlay")
const menuX = document.querySelector(".menuX")
let basicStoreDetails
let detailIdAjax
let detailList = document.createElement('div')
detailList.id = 'details'
let favoritesArray = []

menuX.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function init() {
    if (localStorage.getItem('favorites') !== null) {
        for (let favorite of JSON.parse(localStorage.getItem('favorites'))) {
            favoritesArray.push(favorite)
        }
    }

    getStores(apiUrl, getStoresSuccessHandler)
}

function getStores(url, successfulFunction) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(successfulFunction)
        .catch(getStoresErrorHandler)
}

function getStoresSuccessHandler(data) {
    basicStoreDetails = data
    let store_container = document.getElementById('store-container')
    store_container.addEventListener('click', showDetailClicked)
    for (let basic_store_info of data) {
        let store = document.createElement('div')
        store.classList.add('store')
        for (let favorite of favoritesArray) {
            if (favorite === basic_store_info.id.toString()) {
                store.classList.toggle('active');
            }
        }
        let header = document.createElement('header')
        let h3 = document.createElement('h3')
        h3.innerHTML = basic_store_info.name
        header.appendChild(h3)
        store.appendChild(header)
        let img = document.createElement('img')
        img.src = basic_store_info.img
        store.appendChild(img)
        store_container.appendChild(store)
        store.id = basic_store_info.id
    }
}

function getStoresErrorHandler(data) {
    console.error(data)
}

function showDetailClicked(e) {
    let clickedItem = e.target;
      detailIdAja   if (clickedItem.classList.contains('store')) {
            detailIdAjax = clickedItem.id
            getStores(`${apiUrl}?id=${clickedItem.id}`, getSideSuccessHandler)
        } else if (clickedItem.parentElement.classList.contains('store')) {
            x = clickedItem.parentElement.id
        getStores(`${apiUrl}?id=${clickedItem.parentElement.id}`, getSideSuccessHandler)
    } else if (clickedItem.parentElement.parentElement.classList.contains('store')) {
        detailIdAjax = clickedItem.parentElement.parentElement.id
        getStores(`${apiUrl}?id=${clickedItem.parentElement.parentElement.id}`, getSideSuccessHandler)
    }
}

function getSideSuccessHandler(data) {
    detailList.innerHTML = ''

    let storeNameTag = document.createElement('h2')
    let storeName = basicStoreDetails[detailIdAjax - 1].name
    storeNameTag.innerHTML = storeName
    detailList.appendChild(storeNameTag)

    let typeTag = document.createElement('div')
    typeTag.innerHTML = `Type winkel:`
    typeTag.id = 'paddingTag'
    let type = document.createElement('div')
    type.innerHTML = data.type
    detailList.appendChild(typeTag)
    detailList.appendChild(type)

    let addressTag = document.createElement('div')
    addressTag.innerHTML = `Adres:`
    addressTag.id = 'paddingTag'
    let address = document.createElement('div')
    address.innerHTML = data.address
    detailList.appendChild(addressTag)
    detailList.appendChild(address)

    let serviceTag = document.createElement('div')
    serviceTag.innerHTML = `Services:`
    serviceTag.id = 'paddingTag'
    detailList.appendChild(serviceTag)

    let ul = document.createElement('ul')
    for (let service of data.services) {
        let li = document.createElement('li')
        li.innerHTML = service
        ul.appendChild(li)
    }
    detailList.appendChild(ul)

    let favoriteButton = document.createElement('div')
    favoriteButton.innerHTML = `☆ Favoriet`
    favoriteButton.id = 'favoriteButton'
    favoriteButton.addEventListener('click', favoriteButtonHandler)

    //if it is in the favorite list, make it active
    for (let favorite of favoritesArray) {
        if (favorite === detailIdAjax.toString()) {
            favoriteButton.classList.toggle('active')
        }
    }
    detailList.appendChild(favoriteButton)

    sideNav.appendChild(detailList)
    toggleHamburger()
}

function toggleHamburger() {
    overlay.classList.toggle("showOverlay")
    sideNav.classList.toggle("showNav")
}

function favoriteButtonHandler(e) {
    let clickedItem = e.target;

    //if it is in the favorite list, remove it, else add it
    if (clickedItem.classList.contains('active')) {
        clickedItem.classList.toggle('active');
        favoritesArray.splice(favoritesArray.indexOf(detailIdAjax.toString()), 1)
        localStorage.setItem('favorites', JSON.stringify(favoritesArray))
    } else {
        clickedItem.classList.toggle('active');
        favoritesArray.push(detailIdAjax)
        localStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
    for (let store of basicStoreDetails) {
        let storeDiv = document.getElementById(store.id)
        let howManyInFavorite = 0;
        for(let i = 0; i < favoritesArray.length; i++) {
            if(favoritesArray[i] === store.id.toString())
                howManyInFavorite++;
        }
        if (howManyInFavorite !== 1 && storeDiv.classList.contains('active')) {
            storeDiv.classList.remove('active')
        } else if (howManyInFavorite === 1 && !storeDiv.classList.contains('active')) {
            storeDiv.classList.add('active')
        }
    }
}
