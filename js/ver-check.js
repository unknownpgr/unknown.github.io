if (!current_version) { //This file is initial
    var current_version = 1
    $.ajax('js/ver-check.js?v=' + timeStamp())
} else {
    var new_version = 2
    if (!current_version) console.log('wtf?')
    if (current_version == new_version) console.log('version correct')
    else console.log('version diffrent : \n' +
        '  current : ' + current_version + '\n' +
        '  new     : ' + new_version)
}
