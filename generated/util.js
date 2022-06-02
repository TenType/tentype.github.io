"use strict";
function strip(arr) {
    const lines = arr[0].split('\n');
    let indent = 9999;
    lines.forEach(line => {
        let matched = line.match(/^(\s+)\S+/);
        if (matched != null) {
            indent = Math.min(indent, matched[1].length);
        }
    });
    const spaces = ' '.repeat(indent);
    const result = lines.map(line => line.startsWith(spaces) ? line.slice(indent) : line);
    return result.join('\n').trimEnd();
}
//# sourceMappingURL=util.js.map