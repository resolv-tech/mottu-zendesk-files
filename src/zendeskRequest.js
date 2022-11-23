const axios = require('axios')

async function upload(file, filename, mimetype) {
    const token = process.env.ZENDESK_TOKEN;
    const subdomain = process.env.ZENDESK_SUBDOMAIN;
    const version = process.env.ZENDESK_API_VERSION;

    const url = `https://${subdomain}.zendesk.com/api/${version}/uploads?filename=${filename}`

    const response = await axios.post(url, file, { headers: {
            'Authorization': 'Basic ' + token,
            'Content-Type': mimetype
        }
    });
    return response.data
}

module.exports = upload