const terminal = document.getElementById('terminal')!;
const input = document.getElementById('textbox')! as HTMLInputElement;
const typer = document.getElementById('typer')!;

// Display the header
commands['header'].run();

window.addEventListener('keydown', (event) => {
    if (event.key != 'Enter') return;

    const cmd = input.value.toLowerCase().trim();
    echo(`<span class="directory">tentype $ </span><span class="user-input">${typer.innerHTML}</span>`, 'no-animate');

    if (cmd != '') command(cmd);

    typer.innerHTML = '';
    input.value = '';
});

function command(cmd: string) {
    if (commands.hasOwnProperty(cmd)) {
        commands[cmd].run();
    } else {
        echo(`The command '${cmd}' does not exist. Type 'help' for a list of commands.`);
    }
}

function echo(text: string, style = '') {
    const log = document.getElementById('log')!;
    const next = document.createElement('p');

    // Make sure that intentional spaces are non-breaking
    text = text.replaceAll('  ', '&nbsp;&nbsp;');
    text = text.replaceAll(/^\s+|\s+$/gm,'&nbsp;'); 

    next.innerHTML = text;
    next.className = style;
    log.appendChild(next);

    window.scrollTo(0, document.body.offsetHeight);
}

function echoLines(lines: string, style = '', delay = 100) {
    lines.split('\n').forEach((line, index) => {
        setTimeout(() => {
            echo(line, style);
        }, index * delay);
    });
}
