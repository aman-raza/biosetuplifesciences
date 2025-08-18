const express = require("express");
const router = express.router();
const {
  home,
  bio_pedia,
  bio_it_pedia,
  events,
  explore,
  newsletters,
  opportunities,
} = require("../controller/auth-controller");

router.route("/").get(home);
router.route("/bio-pedia").get(bio_pedia);
router.route("/bio-it-pedia").get(bio_it_pedia);
router.route("/events").get(events);
router.route("/explore").get(explore);
router.route("/newsletters").get(newsletters);
router.route("/opportunities").get(opportunities);
