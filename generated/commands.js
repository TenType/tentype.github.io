"use strict";
const socials = {
    github: ['https://github.com/TenType', 'github/TenType'],
    scratch: ['https://scratch.mit.edu/users/TenType', 'scratch/TenType'],
};
const commands = {
    'help': {
        description: 'Literally this command',
        run() {
            let cmds = '';
            for (const [key, value] of Object.entries(commands)) {
                const cmd = `<span class="command">${key}</span>`;
                cmds += `    ${cmd.padEnd(cmd.length - key.length + 15)}${value.description}\n`;
            }
            echoLines(cmds);
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
            `, 'header');
            setTimeout(() => echoLines(strip `
                    ═════════════════════════════════════════════════════════════════════════════
                    Welcome to my personal interactive web terminal!
                    For a list of commands, enter <span class="command">help</span>.
                `), 1000);
        },
    },
    'social': {
        description: 'Links to my other social networks',
        run() {
            let cmds = '';
            for (const [key, value] of Object.entries(socials)) {
                cmds += `    ${key.padEnd(15)}<a href="${value[0]}" target="_blank" rel="noopener">${value[1]}</a>\n`;
            }
            cmds += '    My other socials are either private or non-existent :)';
            echoLines(cmds);
        },
    },
};
//# sourceMappingURL=commands.js.map