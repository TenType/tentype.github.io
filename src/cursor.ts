const cursor = document.getElementById('cursor');

function moveTyper(self: HTMLInputElement) {
    const typer = document.getElementById('typer')!;
    typer.innerHTML = self.value.replace(/\n/g, '');
}
