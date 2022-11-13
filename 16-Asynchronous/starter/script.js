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
      <div class="country__data">
        <h3 class="country__name">${data?.address?.city || ''}</h3>
        <h4 class="country__region">${data?.country || ''}</h4>
        <p class="country__row"><span>💰</span> ${
          (+data?.lat).toFixed(2) + ' latitude'
        }</p>
        <p class="country__row"><span>💰</span> ${
          data?.place_id + ' place id'
        }</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (err) {
  countriesContainer.insertAdjacentText(
    'beforeend',
    ` Something went wrong! ${err?.message}` || ' Error occurred'
  );
  countriesContainer.style.opacity = 1;
};

const getCountryData = () => {
  fetch('https://restcountries.com/v3.1/name/taiwan')
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
      return fetch('https://restcountries.com/v3.1/name/jamaica');
    })
    .then(response => {
      console.log(response, 'AFTER THIS');

      if (!response.ok) {
        throw new Error(' Response not found');
      }
      return response.json();
    })
    .then(response => {
      console.log(response);
      renderCountry(response[0]);
      return 23;
    })
    .catch(err => {
      console.log('error occured');
      renderError(err);
    })
    .finally(() => {});
};

//challenge

const testData = {
  0: { lat: 37.0902, lng: 95.7129 },
  1: { lat: 52.508, lng: 13.381 },
  2: { lat: 19.037, lng: 72.873 },
  3: { lat: -33.933, lng: 18.474 },
};

const accessToken = 'pk.83d402f7bc2eb4478b94786c08917e95';

const challengeTask = coordinates => {
  return fetch(
    `https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${coordinates.lat}&lon=${coordinates.lng}&format=json`
  )
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error('Country not found');
      return response.json();
    })
    .then(response => {
      renderCountry(response);
      console.log(response);
    })
    .catch(err => {
      renderError(err);
    });
};

btn.addEventListener('click', () => {
  challengeTask(testData['1'])
    .then(() => challengeTask(testData['3']))
    .then(() => {
      setTimeout(() => {
        challengeTask(testData['2']);
      }, 2000);
    });
});

// console.log('Start log');

// setTimeout(() => {
//   console.log('0 second timer ');
// }, 0);

// Promise.resolve('Resolved promise').then(res => console.log(res));

// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('End log');

// code outside callbacks, any kind of callback executes first

const l = new Promise((resolve, reject) => {
  const val = Math.random();
  console.log(val);
  if (val >= 0.5) {
    resolve('You WIN');
  } else {
    reject('You LOSE');
  }
});

l.then(res => console.log(res)).catch(err => console.log(err));
