let text = document.getElementById('text');
let Sky1 = document.getElementById('Sky1');
let Sun1 = document.getElementById('Sun1');
let Hill3 = document.getElementById('Hill3');
let Hill2 = document.getElementById('Hill2');
let Hill1 = document.getElementById('Hill1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let limit = document.documentElement.scrollHeight;
    
    if (value <= limit) {
        text.style.marginTop = value * 2.5 + 'px';
        Sun1.style.marginTop = value * 2.5 + 'px';
        Hill3.style.marginTop = value * 0.3 + 'px';
        Hill3.style.marginLeft = value * 0.1 + 'px';
        Hill2.style.marginTop = value * 0.15 + 'px';
        Hill2.style.marginLeft = value * 0.05 + 'px';
    }
});
function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('show');
        }

let nextDom= document.getElementById('next');
let prevDom= document.getElementById('prev');
let alllistDom= document.querySelector('.alllist');
let listDom=alllistDom.querySelector('.alllist .list');
let allsliderDom=document.querySelector('.alllist .allslider');
let sliderItem=allsliderDom.querySelectorAll('.slide')
let timeDom=document.querySelector('.alllist .time');



allsliderDom.appendChild(sliderItem[0]);
let timeRunning=1000;
let runTimeOut;
nextDom.onclick=function(){
    showSlider('next');
}
prevDom.onclick=function(){
    showSlider('prev');
}

function showSlider(type){
    let itemSlider = document.querySelectorAll('.alllist .list .item');
    let itemAll=document.querySelectorAll('.alllist .allslider .slide')

        if(type==='next'){
           listDom.appendChild(itemSlider[0]); 
           allsliderDom.appendChild(itemAll[0]);
           alllistDom.classList.add('next');
        }else{
            let positionLastItem=itemSlider.length - 1;
            listDom.prepend(itemSlider[positionLastItem]);
            allsliderDom.prepend(itemAll[positionLastItem]);
            alllistDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
runTimeOut=setTimeout(() =>{
    alllistDom.classList.remove('next');
    alllistDom.classList.remove('prev');
}, timeRunning
);
}

const materialPrices = {
        tshirt: {cotton: 400, mg: 250, cottonSublimation: 700, stretch: 300},
        longsleeve: {cotton: 600, mg: 350, fur: 400},
        hoodie: {cotton: 900, mg: 430, fur: 500},
        pollo: {zebano: 300, almeda: 450},
        scarf: 150,
        cape: {type1: 300, type2: 330, type3: 400}
    };

    const printPrices = {
        sublimation: {a3: 60, a4: 30, a5: 15, a6: 7.5},
        silkScreen: {a3: 60, a4: 30, a5: 15, a6: 7.5},
        dtf: {a3: 250, a4: 125, a5: 62.5, a6: 31.25}
    };

    document.getElementById('outfitType').addEventListener('change', function () {
        const materialType = document.getElementById('materialType');
        materialType.innerHTML = ''; // Clear existing options

        let options = [];

        switch (this.value) {
            case 'tshirt':
                options = ['Cotton', 'MG', 'Cotton Sublimation', 'Stretch'];
                break;
            case 'longsleeve':
                options = ['Cotton', 'MG', 'Fur'];
                break;
            case 'hoodie':
                options = ['Cotton', 'MG', 'Fur'];
                break;
            case 'pollo':
                options = ['Zebano', 'Almeda'];
                break;
            case 'scarf':
                options = ['Cotton', 'MG', 'Cotton Sublimation', 'Stretch']; // No change for scarf
                break;
            case 'cape':
                options = ['Type 1', 'Type 2', 'Type 3'];
                break;
        }

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.toLowerCase().replace(/ /g, '');
            opt.innerHTML = option;
            materialType.appendChild(opt);
        });
    });

    function calculatePrice() {
        const outfitType = document.getElementById('outfitType').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const materialType = document.getElementById('materialType').value;
        const printingType = document.getElementById('printingType').value;
        const printSizeArea = document.getElementById('printSizeArea').value;

        let materialPrice;
        if (outfitType === 'scarf') {
            materialPrice = materialPrices.scarf;
        } else {
            materialPrice = materialPrices[outfitType][materialType];
        }

        let printPrice;
        if (!quantity || quantity < 1) {
                document.getElementById('result').innerHTML = 'Please enter a valid quantity';
                return;
            }


        if (printingType === 'other' || printSizeArea === 'above' ) {
            document.getElementById('result').innerHTML = 'Please contact us';
            return;
        }else {
            printPrice = printPrices[printingType][printSizeArea];
        }

        let totalPrice = (materialPrice + printPrice) * quantity;

        if (quantity > 50 && quantity <= 100) {
            totalPrice *= 0.95;
        } else if (quantity > 100 && quantity <= 300) {
            totalPrice *= 0.9;
        } else if (quantity > 300 && quantity <= 500) {
            totalPrice *= 0.8;
        } else if (quantity > 500 && quantity <= 1000) {
            totalPrice *= 0.75;
        }

        document.getElementById('result').innerHTML = `Total Price: ${totalPrice.toFixed(2)} BR`;
    }




    const printTypePrices = {
        magazine: 100,
        flayer: 40,
        brochure: 20,
        businessCard: 60,
        calander: 120,
        letterHead: 300
    };

    const paperTypePrices = {
        default: 10,
        '150gX250g': 15,
        '80gX250g': 12
    };

    const printSizePrices = {
        a3: 25,
        a4: 12.5, // 25 / 2
        a5: 6.25, // 25 / 4
        a6: 3.125 // 25 / 8
    };

    function calculatePaperPrice() {
        const printType = document.getElementById('printType').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const pageNum = parseInt(document.getElementById('pageNum').value);
        const paperType = document.getElementById('paperType').value;
        const printSizeArea = document.getElementById('printSizeArea').value;

        let printTypePrice = printTypePrices[printType];
        let paperTypePrice = paperTypePrices[paperType];
        let printSizePrice;

        if (!quantity || quantity < 1 && !pageNum || pageNum<1){
                document.getElementById('result').innerHTML = 'Please enter a valid Page Number and Quantity';
                return;
            }else if(!pageNum || pageNum<1){
                document.getElementById('result').innerHTML = 'Please enter a valid Page Number';
                return;
            }else if(!quantity || quantity < 1 ) {
                document.getElementById('result').innerHTML = 'Please enter a valid Quantity';
                return;
            }


        if (printSizeArea === 'custom' || paperType ==='other') {
            document.getElementById('result').innerHTML = 'Please contact us';
            return;
        }else {
            printSizePrice = printSizePrices[printSizeArea];
        }

        let totalPrice = (printTypePrice * quantity * pageNum) + (paperTypePrice * printSizePrice);

        if (quantity > 50 && quantity <= 100) {
            totalPrice *= 0.91;
        } else if (quantity > 100 && quantity <= 300) {
            totalPrice *= 0.5;
        } else if (quantity > 300 && quantity <= 500) {
            totalPrice *= 0.88;
        } else if (quantity > 500 && quantity <= 1000) {
            totalPrice *= 0.8;
        }

        document.getElementById('result').innerHTML = `Total Price: ${totalPrice.toFixed(2)} BR`;
    }
    const packagePrices = {
            light: 500,
            medium: 700,
            premium: 1200,
            exclusive: 2000,
            logoonly: 400
        };

        document.getElementById('pricingForm').addEventListener('submit', function(event) {
            event.preventDefault();
            displayPrice();
        });

        function displayPrice() {
           
            var packageType = document.getElementById('packages').value;
            var price = packagePrices[packageType];

            var resultText = `
                <h2>Package Price</h2>
                <p><strong>Selected Package:</strong> ${packageType.charAt(0).toUpperCase() + packageType.slice(1)}</p>
                <p><strong>Price:</strong> ${price} br</p>
            `;

            document.getElementById('result').innerHTML = resultText;
        }
 function resetForm() {
            document.getElementById('inputForm').reset();
            document.getElementById('pricingForm').reset();
            document.getElementById('result').innerHTML = "";
        }
        