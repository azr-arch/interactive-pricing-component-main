const slider = document.querySelector('input[type="range"]')
const circle = document.querySelector('.circle')

function handleChange(e) {
    let target = e.target;

    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    setPrices(slider.value)
}


slider.addEventListener('input', (e) => handleChange(e))


const toggleBtn = document.querySelector('.toggle-switch')

function handleToggle(){

    const position = circle.getAttribute('data-position')

    if(position === 'monthly'){
        circle.style.transform = `translateX(100%)`
        circle.setAttribute('data-position', 'yearly')
    } else if(position === 'yearly') {
        circle.style.transform = `translateX(0%)`
        circle.setAttribute('data-position', 'monthly')
    }

    // CHANGING PRICE
    setPrices(slider.value)
}

// CLICK EVENT ON TOGGLEBUTTON
toggleBtn.addEventListener('click', handleToggle)




// SET PRICE FUCNTION TO RENDER PRICES AND PAGECOUNT DYNAMICALLY
function setPrices(val){
    const pageCount = document.querySelector('.pageview-count')
    const price = document.querySelector('.price')

    const currPosition = circle.getAttribute('data-position')
    const isMonthly = currPosition === 'monthly' ? true : false

    const pageViewsCount = {
        0: {
            pages: '10K',
            price: `$${isMonthly ? '8.00' : 8 - (0.25 * 8)+'.00' }
            `
        },
        1: {
            pages: '50K',
            price: `$${isMonthly ? '12.00' : 12 - (0.25 * 12)+'.00' }
            `
        },
        2: {
            pages: '100K',
            price: `$${isMonthly ? '16.00' : 16 - (0.25 * 16)+'.00' }
            `
        },
        3: {
            pages: '500K',
            price: `$${isMonthly ? '24.00' : 24 - (0.25 * 24)+'.00' }
            `
        },
        4: {
            pages: '1M',
            price: `$${isMonthly ? '36.00' : 36 - (0.25 * 36)+'.00' }
            `
        }
    }

    pageCount.textContent = pageViewsCount[val].pages
    price.textContent = pageViewsCount[val].price
}