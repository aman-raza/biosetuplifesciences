const home = async (req, res) => {
  res.redirect("http://localhost:3000/#");
};

const bio_pedia = async (req, res) => {
  res.redirect("http://localhost:3000/#bioit-container");
};

const bio_it_pedia = async (req, res) => {
  res.send("Bio-IT-Pedia Page");
};

const events = async (req, res) => {
  res.send("Events Page");
};

const explore = async (req, res) => {
  res.send("Explore Page");
};

const newsletters = async (req, res) => {
  res.send("Newsletters Page");
};

const opportunities = async (req, res) => {
  res.send("Opportunities Page");
};

module.exports = {
  home,
  bio_pedia,
  bio_it_pedia,
  events,
  explore,
  newsletters,
  opportunities,
};
