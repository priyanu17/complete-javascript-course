'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/india');

// request.send();

// request.addEventListener('load', function () {
//   //   console.log(this.responseText);

//   const [data] = JSON.parse(this.responseText);

//   console.log(data);

//   const html = `
//   <article class="country">
//     <img class="country__img" src="${data?.flags?.png || ''}" />
//     <div class="country__data">
//       <h3 class="country__name">${data?.name?.common || ''}</h3>
//       <h4 class="country__region">${data?.region || ''}</h4>
//       <p class="country__row"><span>👫</span>${
//         (+data?.population / 1000000).toFixed(2) + '  people'
//       }</p>
//       <p class="country__row"><span>🗣️ ${Object.values(
//         data?.languages
//       )}</span></p>
//       <p class="country__row"><span>💰</span>${
//         data?.currencies?.INR?.name || ''
//       }</p>
//     </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);

//   countriesContainer.style.opacity = 1;
// });

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const res = fetch('https://restcountries.com/v3.1/name/india');

// console.log(res, 'RES');

const renderCountry = data => {
  const html = `
    <article class="country">
      <img class="country__img" src="${data?.flags?.png || ''}" />
      <div class="country__data">
        <h3 class="country__name">${data?.name?.common || ''}</h3>
        <h4 class="country__region">${data?.region || ''}</h4>
        <p class="country__row"><span>👫</span>${
          (+data?.population / 1000000).toFixed(2) + '  people'
        }</p>
        <p class="country__row"><span>💰</span>${
          data?.currencies?.INR?.name || ''
        }</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = () => {
  fetch('https://restcountries.com/v3.1/name/denmark')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      console.log(response);
      renderCountry(response[0]);
      return 23;
    })
    .then(data => console.log(data))
    .then(() => {
      return fetch('https://restcountries.com/v3.1/name/india');
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      console.log(response);
      renderCountry(response[0]);
      return 23;
    });
};

getCountryData();
