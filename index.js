const express = require('express');

const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config.json')
const mysql = require('mysql')