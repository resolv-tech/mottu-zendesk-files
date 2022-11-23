const {getFileParams, generateFileName} = require('./setupFileParams')
const upload = require('./zendeskRequest')

async function uploadFileToZendesk(event, ctx) {
    const data = JSON.parse(event.body)
    
    const {b64string, phone, ext, mimetype} = await getFileParams(data)
    
    const filename = await generateFileName(phone, ext)
    
    const file = Buffer.from(b64string, 'base64');

    try { 
        const response = await upload(file, filename, mimetype)
        return {
            statusCode: '201',
            body: JSON.stringify({
                filename,
                mimetype,
                response
            })
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: '400',
            body: JSON.stringify({
                filename,
                mimetype,
                error: error.message
            })
        } 
    }
    

    
}

module.exports = uploadFileToZendesk