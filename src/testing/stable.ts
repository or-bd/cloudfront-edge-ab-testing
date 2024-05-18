import Testing from '../utils/testing';

Testing.random_x = Math.floor(Math.random() * Testing.versions.stable);

window.testing = Testing;
