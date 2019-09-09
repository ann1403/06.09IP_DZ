const fs = require('fs');


module.exports.ip = function(req, res, next) {
    // let data = JSON.parse(fs.readFileSync('data.json'));
    let data1 = [];
    let users_onlocalhost = [0];
    if (users_onlocalhost.length === 1) {
        console.log('\n' + req.ip);
        users_onlocalhost.push(req.ip);
        fs.writeFileSync('data.json', JSON.stringify(users_onlocalhost));
        console.log('\n' + 'User has entered:' + req.ip);
        console.log('Users: ', users_onlocalhost);
    } else {
        console.log(req.ip);
        for (let i = 0; i < users_onlocalhost.length; i++) {
            if (req.ip != users_onlocalhost[i]) {
                console.log(req.ip);
                users_onlocalhost.push(req.ip);
                fs.writeFileSync('data.json', JSON.stringify(users_onlocalhost));
                console.log('\n' + 'New:' + req.ip);
                console.log('entered users: ', users_onlocalhost);
            } else {
                console.log('\n' + 'old user has entered -- ' + req.ip);
            }
        }
    }
    next();
}

// module.exports.ip = function(req, res, next) {
//         let data1 = JSON.parse(fs.readFileSync('data.json'));
//         // let data1 = 0;
//         let users_onlocalhost = 0;
//         if (users_onlocalhost.length === 0) {
//             console.log(req.ip);
//             users_onlocalhost.push(req.ip);
//             fs.writeFileSync('data.json', JSON.stringify(users_onlocalhost));
//             console.log('\n' + 'User has entered:' + req.ip);
//         } else {
//             for (let i = 0; i < users_onlocalhost; i++) {
//                 if (req.ip != users_onlocalhost[i]) {
//                     console.log(req.ip);
//                     users_onlocalhost.push(req.ip);
//                     fs.writeFileSync('data.json', JSON.stringify(users_onlocalhost));
//                     console.log('\n' + 'New:' + req.ip);
//                     console.log('entered users: ', users_onlocalhost);
//                 } else {
//                     console.log(req.ip);
//                     console.log('\n' + 'old user has entered -- ' + req.ip);
//                 }

//             }
//         }

//         next();
//     }
// console.log('entered users: ', users_onlocalhost);