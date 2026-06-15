const armorDataset = [
  {
    name: "G. Rathalos Helm α",
    slot: "Helm",
    defense: 42,
    skills: { "Weakness Exploit": 1, "Attack Boost": 1 }
  },
  {
    name: "G. Rathalos Vambraces α",
    slot: "Vambraces",
    defense: 42,
    skills: { "Weakness Exploit": 1, "Critical Eye": 1 }
  },
  {
    name: "Leather Pants α",
    slot: "Greaves",
    defense: 26,
    skills: { "Botanist": 1 }
  }
];

// Export the data so server.js can see it
module.exports = { armorDataset };