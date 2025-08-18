const home = async (req, res) => {
  res.send("Home Page");
};

const bio_pedia = async (req, res) => {
  res.send("Bio-Pedia Page");
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
