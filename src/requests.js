import React from "react";
const currentPromiseReject = null;
const currentValue = null;
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "React POST Request Example" })
};
const templateMeteo = {};
export function meteo(name) {
  let apiKey = "313bc1e216d2406ea34101619231402";
  var data1;
  //https://api.weatherapi.com/v1/current.json?key=313bc1e216d2406ea34101619231402&q=Paris

  var promise = new Promise((resolve, reject) => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + name
    ).then((response) => {
      // check if the call was successful
      if (response.ok) {
        response.json().then((data) => {
          resolve(data);
          console.log("data: " + data);
          data1 = data;
        });
      } else {
        response.json().then((data) => {
          reject(data);
          data1 = null;
        });
      }
    });
  });
  return data1;
}

export function geo({ name }) {
  fetch(url).then((response) => {
    // check if the call was successful
    if (response.ok) {
      response.json().then((data) => console.log(data));
    } else {
      response.json().then((data) => console.log(data));
    }
  });
  var promise = new Promise((resolve, reject) => {
    //currentPromiseReject = reject;
    debugger;
    var apiKey = "47f523a46b944b47862e39509a7833a9";
    var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
      currentValue
    )}&limit=5&apiKey=${apiKey}`;

    fetch(url).then((response) => {
      // check if the call was successful
      if (response.ok) {
        response.json().then((data) => resolve(data));
      } else {
        response.json().then((data) => reject(data));
      }
    });
  });
  return "<meteo>";
}

export function hotels({ name }) {
  fetch("https://developers.booking.com/api/index.html", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      this.setState({ postId: data.id });
      console.log(data);
    });
}

export function resto({ name }) {
  fetch("https://tripadvisor-content-api.readme.io", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      this.setState({ postId: data.id });
      console.log(data);
    });
}
