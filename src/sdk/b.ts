import Testing from '../utils/testing';

Testing.random_x = Math.floor(Math.random() * (99 - Testing.versions.stable + 1) + Testing.versions.stable);
Testing.random_y = Math.floor(Math.random() * (99 - Testing.versions.a + 1) + Testing.versions.a);

window.testing = Testing;
