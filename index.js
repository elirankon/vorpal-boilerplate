const Vorpal = require('vorpal');
const fs = require('fs');

function main() {
    const vorpal = new Vorpal();
    if (process.env.NODE_ENV === 'test') vorpal.session.log = () => {};

    const commandsPath = `${__dirname}/commands`;
    fs.readdirSync(commandsPath).forEach((service) => {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        require(`${commandsPath}/${service}`)(vorpal);
    });

    return vorpal;
}

if (process.env.NODE_ENV !== 'test') {
    const vorpalInstance = main();
    vorpalInstance.show();
}

module.exports = {
    main,
};
