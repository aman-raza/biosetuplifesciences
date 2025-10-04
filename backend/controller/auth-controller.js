const home = async (req, res) => {
  res.redirect("http://localhost:3000/");
};

const bio_pedia = async (req, res) => {
  res.redirect("http://localhost:3000/#bioit-container");
};

const bio_it_pedia = async (req, res) => {
  res.redirect("http://localhost:3000/#bioit-container");
};

const events = async (req, res) => {
  res.redirect("http://localhost:3000/#events-container");
};

const explore = async (req, res) => {
  res.redirect("http://localhost:3000/#explore-container");
};

const newsletters = async (req, res) => {
  res.redirect("http://localhost:3000/#newsletters-container");
};

const opportunities = async (req, res) => {
  res.redirect("http://localhost:3000/#opportunities-container");
};

export default {
  home,
  bio_pedia,
  bio_it_pedia,
  events,
  explore,
  newsletters,
  opportunities,
};
