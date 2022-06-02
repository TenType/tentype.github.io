interface CommandsType {
    [key: string]: {
        description: string,
        run: () => void,
    }
}

const commands: CommandsType = {
    'help': {
        description: 'Literally this command',
        run() {
            let cmds = '';
            for (const [key, value] of Object.entries(commands)) {
                cmds += `    ${key.padEnd(15)} ${value.description}\n`;
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
            echoLines(strip`
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
}
