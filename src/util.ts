function strip(arr: TemplateStringsArray): string {
    const lines = arr[0].split('\n');

    // Find the minimum indentation of the lines
    let indent = 9999;
    lines.forEach(line => {
        let matched = line.match(/^(\s+)\S+/);
        if (matched != null) {
            indent = Math.min(indent, matched[1].length);
        }
    });

    // Remove spaces from each line that has the indentation
    const spaces = ' '.repeat(indent);
    const result = lines.map(line => line.startsWith(spaces) ? line.slice(indent) : line);

    return result.join('\n').trimEnd();
}
