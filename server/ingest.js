const https = require('https');
const fs = require('fs');
const path = require('path');
const { OutgoingMessage } = require('http');

const API_URL = 'https://wilds.mhdb.io/en/armor';
const OUTPUT_FILE = path.join(__dirname, 'data.js');

const slotMap = {
  "head":"head",
  "chest":"chest",
  "arms":"arms",
  "waist":"waist",
  "legs":"legs"
};

console.log("📥 Fetching raw armor data from Monster Hunter API...");

https.get(API_URL, (res) => {
  let rawData = '';

  res.on('data', chunk => { rawData += chunk });

  res.on('end', () => {
    try {
      const apiData = JSON.parse(rawData);
      console.log(`✅ Downloaded ${apiData.length} raw armor pieces. Transforming data...`);

      const transformedDataset = apiData.map(piece => {
        const flatSkills = {};

        if (piece.skills && Array.isArray(piece.skills)) {
          piece.skills.forEach(s => {
            if (s && s.skill && s.skill.name) {
              flatSkills[s.skill.name] = s.level;
            }
          });
        }
        
        return {
          name: piece.name,
          slot: slotMap[piece.kind] || piece.kind,
          defense: piece.defense ? piece.defense.base : 0,
					resistances: {
						fire: piece.resistances ? (piece.resistances.fire || 0) : 0,
						water: piece.resistances ? (piece.resistances.water || 0) : 0,
						ice: piece.resistances ? (piece.resistances.ice || 0) : 0,
						thunder: piece.resistances ? (piece.resistances.thunder || 0) : 0,
						dragon: piece.resistances ? (piece.resistances.dragon || 0) : 0,
					},
          skills: flatSkills
        }
      });
      
			const fileContent = `const armorDataset = ${JSON.stringify(transformedDataset, null, 2)};\n\nmodule.exports = { armorDataset };\n`;

			fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf-8');
			console.log("🚀 Success! data.js has been updated.");

    } catch (error) {
			console.error("❌ Failed to parse or transform API data:", error.message);
		}
  });
}).on('error', (err) => {
	console.error("❌ Network error downloading from API:", err.message);
});