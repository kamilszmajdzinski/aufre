var scroll;
if(SmoothScroll !== undefined) {
    scroll = new SmoothScroll('#offerLink');
}

const ourOfferWindowButton = document.getElementById('ourOfferWindow');
const ourOfferDoorsButton = document.getElementById('ourOfferDoors');
const ourOfferBlindsButton = document.getElementById('ourOfferBlinds');
const ourOfferMiscButton = document.getElementById('ourOfferMisc');
const ourOfferMontageButton = document.getElementById('ourOfferMontage');

const ourOfferContainer = document.getElementById('ourOfferContainer');

const buttons = [ourOfferWindowButton, ourOfferDoorsButton, ourOfferBlindsButton, ourOfferMiscButton];

const windowsHtml = '<div class="d-flex cardContainer justify-content-center">\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" src="./img/okna_pvc.jpg" alt="Card image cap">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Okna PVC</h5>\n' +
    '            <a href="./oferta/okna/pvc/oknaVeka.html" class="btn btn-primary w-100"  style="margin-top: 14px">Sprawdź ofertę</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" src="./img/okna_drew.jpg" alt="Card image cap">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Okna drewniane</h5>\n' +
    '            <a href="./oferta/okna/oknaDrewniane.html" class="btn btn-primary w-100" style="margin-top: 14px">Sprawdź ofertę</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" src="./img/okno_amel.jpg" alt="Card image cap">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Okna aluminiowe</h5>\n' +
    '            <a href="./oferta/okna/aluminiowe/oknaAlsecco.html" class="btn btn-primary w-100"  style="margin-top: 14px">Sprawdź ofertę</a>\n' +
    '          </div>\n' +
    '        </div>';

const doorsHtml = '<div class="d-flex cardContainer justify-content-center">\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" src="./img/setto-500x200.png" alt="Drzwi zewnętrzne SETTO logo">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Drzwi zewnętrzne SETTO</h5>\n' +
    '            <p class="card-text text-center">Skonfiguruj swoje wymarzone drzwi i zapytaj o ofertę specjalną.</p>\n' +
    '            <a href="http://www.setto.pl/konfigurator/" class="btn btn-primary w-100" style="margin-top: 36px">Skonfiguruj swoje drzwi</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" style="padding: 18px" src="./img/Wiked_LOGO_PODST_RGB.png" alt="Drzwi zewnętrzne WIKĘD logo">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Drzwi zewnętrzne WIKĘD</h5>\n' +
    '            <p class="card-text text-center">Skonfiguruj swoje wymarzone drzwi i zapytaj o ofertę specjalną.</p>\n' +
    '            <a href="https://wiked.pl/konfigurator-drzwi/" class="btn btn-primary w-100" style="margin-top: 36px">Skonfiguruj swoje drzwi</a>\n' +
    '          </div>\n' +
    '        </div>'

const miscHtml = '<div class="d-flex cardContainer justify-content-center">\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" src="./img/klamka.jpeg" alt="Card image cap">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Klamki</h5>\n' +
    '            <p class="card-text text-center">Wybierz produkt i zapytaj o ofertę specjalną</p>\n' +
    '            <a href="https://www.medos.pl/products/index.php?lang=pl&up=1" class="btn btn-primary w-100">Wybierz wzór</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="card cardCustom">\n' +
    '          <img class="card-img-top" src="./img/parapet.jpeg" alt="Card image cap">\n' +
    '          <div class="card-body">\n' +
    '            <h5 class="card-title text-center">Parapety</h5>\n' +
    '            <p class="card-text text-center">Wybierz produkt i zapytaj o ofertę specjalną</p>\n' +
    '            <a href="https://www.medosparapety.pl/products/index.php?lang=pl" class="btn btn-primary w-100">Wybierz wzór</a>\n' +
    '          </div>\n' +
    '        </div>';

const blindsHtml = '<div class="d-flex cardContainer justify-content-center">\n' +
    '        <div class="card cardCustom justify-content-between">\n' +
    '          <img class="card-img-top" src="./img/natynkowa.png" alt="Card image cap">\n' +
    '          <div style="padding: 16px">\n' +
    '            <h5 class="card-title text-center">Natynkowe</h5>\n' +
    '            <p class="card-text text-center">System rolet do montażu we wnęce lub na elewacji.</p>\n' +
    '          </div>\n' +
    '            <a href="./contact.html" style="margin: 8px" class="btn btn-primary">Zobacz więcej</a>\n' +
    '        </div>\n' +
    '        <div class="card cardCustom justify-content-between">\n' +
    '          <img class="card-img-top" src="./img/podtynk.png" alt="Card image cap">\n' +
    '          <div style="padding: 16px">\n' +
    '            <h5 class="card-title text-center">Podtynkowe</h5>\n' +
    '            <p class="card-text text-center">System rolet do montażu pod zabudowę w elewacji. Rewizja serwisowa od zewnętrznej strony budynku.</p>\n' +
    '          </div>\n' +
    '            <a href="./contact.html" style="margin: 8px" class="btn btn-primary">Zobacz więcej</a>\n' +
    '        </div>\n' +
    '        <div class="card cardCustom justify-content-between">\n' +
    '          <img class="card-img-top" src="./img/nadstawna.png" alt="Card image cap">\n' +
    '          <div style="padding: 16px">\n' +
    '            <h5 class="card-title text-center">Nadstawne</h5>\n' +
    '            <p class="card-text text-center">System rolet do montażu we wnęce instalacyjnej. Rewizja serwisowa od wewnętrznej strony budynku.</p>\n' +
    '          </div>\n' +
    '            <a href="./contact.html" style="margin: 8px" class="btn btn-primary">Zobacz więcej</a>\n' +
    '        </div>';

const montageHtml = '<div class="row featurette">\n' +
    '        <div class="col-md-7" style="margin-top: 24px">\n' +
    '          <h2 class="featurette-heading">Montaż standardowy.</h2>\n' +
    '          <p class="lead">To wciąż najpopularniejszy sposób montażu w Polsce. Stolarka mocowana za pomocą kotew oraz śrub montażowych, następnie szczeliny montażowe wypełnione są pianą poliuretanową.</p>\n' +
    '        </div>\n' +
    '        <div class="col-md-5">\n' +
    '          <img src="./img/mont_stand.jpg" style="width: 100%">\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <hr class="montageDivider">\n' +
    '\n' +
    '      <div class="row featurette">\n' +
    '        <div class="col-md-7 order-md-2">\n' +
    '          <h2 class="featurette-heading">Montaż szczelny.</h2>\n' +
    '          <p class="lead">Wielowarstwowy montaż okien z wykorzystaniem taśm paroprzepuszaczalnych oraz paroszczelnych. Taki sposób montażu pozwala wyeliminować mostki termiczne występujące na łączeniu muru z oknem oraz znacznie obniżyć poziom hałasu. Szczelny montaż likwiduje zjawisko występowania przedmuchu przy krawędziach ościeży. Ten typ instalacji wymaga idaelnie przygotowanych wnęk okiennych.</p>\n' +
    '        </div>\n' +
    '        <div class="col-md-5 order-md-1">\n' +
    '          <img src="./img/mont_szczelny.jpg" style="width: 100%" alt="">\n' +
    '\n' +
    '        </div>\n' +
    '      </div>'

ourOfferWindowButton.classList.add('activeListItem');
ourOfferContainer.innerHTML = windowsHtml;

ourOfferDoorsButton.addEventListener('click', () => {
    ourOfferDoorsButton.classList.add('activeListItem');
    ourOfferWindowButton.classList.remove('activeListItem');
    ourOfferBlindsButton.classList.remove('activeListItem');
    ourOfferMiscButton.classList.remove('activeListItem');
    ourOfferMontageButton.classList.remove('activeListItem');
    ourOfferContainer.innerHTML = doorsHtml;
})

ourOfferWindowButton.addEventListener('click', () => {
    ourOfferWindowButton.classList.add('activeListItem');
    ourOfferDoorsButton.classList.remove('activeListItem');
    ourOfferBlindsButton.classList.remove('activeListItem');
    ourOfferMiscButton.classList.remove('activeListItem');
    ourOfferMontageButton.classList.remove('activeListItem');

    ourOfferContainer.innerHTML = windowsHtml;
})

ourOfferBlindsButton.addEventListener('click', () => {
    ourOfferBlindsButton.classList.add('activeListItem');
    ourOfferDoorsButton.classList.remove('activeListItem');
    ourOfferWindowButton.classList.remove('activeListItem');
    ourOfferMiscButton.classList.remove('activeListItem');
    ourOfferMontageButton.classList.remove('activeListItem');

    ourOfferContainer.innerHTML = blindsHtml
})

ourOfferMiscButton.addEventListener('click', () => {
    ourOfferBlindsButton.classList.remove('activeListItem');
    ourOfferDoorsButton.classList.remove('activeListItem');
    ourOfferWindowButton.classList.remove('activeListItem');
    ourOfferMiscButton.classList.add('activeListItem');
    ourOfferMontageButton.classList.remove('activeListItem');

    ourOfferContainer.innerHTML = miscHtml
})

ourOfferMontageButton.addEventListener('click', () => {
    ourOfferBlindsButton.classList.remove('activeListItem');
    ourOfferDoorsButton.classList.remove('activeListItem');
    ourOfferWindowButton.classList.remove('activeListItem');
    ourOfferMiscButton.classList.remove('activeListItem');
    ourOfferMontageButton.classList.add('activeListItem');

    ourOfferContainer.innerHTML = montageHtml;
})
