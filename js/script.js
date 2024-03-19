// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const firstName = document.getElementById("street-number").value
  const userAge = parseInt(document.getElementById("street-name").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}