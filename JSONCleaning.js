const axios = require('axios'); // Import Axios for HTTP requests

const varFiltersCg = ['N/A', '-', '']; // Filters to determine removable values

async function cleanJsonObject() {
    try {
        const response = await axios.get('http://coderbyte.com/api/challenges/json/json-cleaning');
        const data = response.data;

        let itemsRemoved = 0;

        function clean(obj) {
            if (Array.isArray(obj)) {
                return obj.filter(item => {
                    if (varFiltersCg.includes(item)) {
                        itemsRemoved++;
                        return false;
                    }
                    return true;
                });
            } else if (typeof obj === 'object' && obj !== null) {
                const cleanedObj = {};
                for (const key in obj) {
                    if (varFiltersCg.includes(obj[key])) {
                        itemsRemoved++;
                    } else if (typeof obj[key] === 'object') {
                        cleanedObj[key] = clean(obj[key]);
                    } else {
                        cleanedObj[key] = obj[key];
                    }
                }
                return cleanedObj;
            }
            return obj;
        }

        const cleanedData = clean(data);
        const varOcg = { ...cleanedData, items_removed: itemsRemoved };

        console.log(JSON.stringify(varOcg));
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

cleanJsonObject();