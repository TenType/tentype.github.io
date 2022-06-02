"use strict";
const cursor = document.getElementById('cursor');
function moveTyper(self) {
    const typer = document.getElementById('typer');
    typer.innerHTML = self.value.replace(/\n/g, '');
}
//# sourceMappingURL=cursor.js.map