import Testing from '../utils/testing';

Testing.random_x = Math.floor(Math.random() * (99 - Testing.versions.stable + 1) + Testing.versions.stable);
Testing.random_y = Math.floor(Math.random() * (Testing.versions.a - 1 + 1) + 1);

window.testing = Testing;
