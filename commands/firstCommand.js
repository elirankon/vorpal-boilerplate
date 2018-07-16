module.exports = (cli) => {
    cli.command('hello', 'echos your hello').action((args, callback) => {
        callback('hello');
    });

    cli.command('world', 'echos your world').action((args, callback) => {
        callback('world');
    });
};
