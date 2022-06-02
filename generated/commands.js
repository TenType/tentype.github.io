"use strict";
const commands = {
    'help': {
        description: 'Literally this command',
        run() {
            for (const [key, value] of Object.entries(commands)) {
                echo(`    ${key.padEnd(15)} ${value.description}`);
            }
        },
    },
    'clear': {
        description: 'Clear the terminal',
        run() {
            terminal.innerHTML = '<span id="log"></span>';
        },
    },
    'header': {
        description: 'Display the header',
        run() {
            echoLines(strip `
                 ██████╗ ████████╗███████╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗
                ██╔═══██╗╚══██╔══╝██╔════╝████╗  ██║╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝
                ██║██╗██║   ██║   █████╗  ██╔██╗ ██║   ██║    ╚████╔╝ ██████╔╝█████╗  
                ██║██║██║   ██║   ██╔══╝  ██║╚██╗██║   ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  
                ╚█║████╔╝   ██║   ███████╗██║ ╚████║   ██║      ██║   ██║     ███████╗
                 ╚╝╚═══╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝   ╚═╝      ╚═╝   ╚═╝     ╚══════╝ © 2022
                =============================================================================
                Welcome to my personal interactive web terminal!
                For a list of commands, type 'help'.
            `);
        }
    }
};
//# sourceMappingURL=commands.js.map