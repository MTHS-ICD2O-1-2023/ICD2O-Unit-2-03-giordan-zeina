// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Giordan Zeina
// Created on: Mar 2024
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value
  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + ", " + streetName
}