"use strict";
const terminal = document.getElementById('terminal');
const input = document.getElementById('textbox');
const typer = document.getElementById('typer');
commands['header'].run();
window.addEventListener('keydown', (event) => {
    if (event.key != 'Enter')
        return;
    const cmd = input.value.toLowerCase().trim();
    command(cmd);
    typer.innerHTML = '';
    input.value = '';
});
function command(cmd) {
    echo(`<span class="directory">tentype $ </span><span class="user-input">${cmd}</span>`, 'no-animate');
    if (cmd == '')
        return;
    if (commands.hasOwnProperty(cmd)) {
        commands[cmd].run();
    }
    else {
        echo(`The command '${cmd}' does not exist. Enter <span class="command">help</span> for a list of commands.`);
    }
}
function echo(text, style = '') {
    const log = document.getElementById('log');
    const next = document.createElement('p');
    text = text.replaceAll('  ', '&nbsp;&nbsp;');
    text = text.replaceAll(/^\s+|\s+$/gm, '&nbsp;');
    next.innerHTML = text;
    next.className = style;
    linkCommands(next);
    log.appendChild(next);
    window.scrollTo(0, document.body.offsetHeight);
}
function echoLines(lines, style = '', delay = 100) {
    lines.split('\n').forEach((line, index) => {
        setTimeout(() => {
            echo(line, style);
        }, index * delay);
    });
}
function linkCommands(element) {
    const commands = element.getElementsByClassName('command');
    for (const cmd of commands) {
        cmd.setAttribute('onclick', 'command(this.innerHTML)');
    }
}
//# sourceMappingURL=index.js.map