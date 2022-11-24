async function getFileParams(data) {
    const b64 = data.b64
    const phone = data.phone
    const ext = b64.match(/\.[A-Za-z0-9]+;/)[0].slice(1,-1)
    const mimetype = b64.match(/data:[a-zA-Z0-9\/]+;/)[0].slice(5,-1)
    const b64string = b64.split(/base64,/)[1]
    return {b64string, phone, ext, mimetype}
}

async function generateFileName(phone, extension){
    const timestamp = Date.now().toString();
    phone = phone.toString()
    const filename = `${timestamp}${phone}.${extension}`
    return filename
}

module.exports = {getFileParams, generateFileName}