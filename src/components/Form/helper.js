
function validateString(value) {
    // value is always string so i have to check using this weird approach that it's not a number
    let testNum = Number(value)
    if (isNaN(testNum)) {
        let testString = String(value)
        if (testString.trim().length) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function validateURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}

export { validateString, validateURL }