HFS.onEvent('afterEntryName', ({ entry }) =>
    /\.(mp3|wav|aac|ogg|flac)$/.test(entry.n) &&
        `<button class='play-button' onclick='play("${entry.n}")' />`)

function play(name = '') {
    const root = document.getElementById('player')
    root.style.display = name ? 'flex' : ''
    const audio = root.querySelector('audio')
    audio.src = name
    if (name) audio.play()
    else audio.pause()
    root.querySelector('#player-title').innerText = name
}

HFS.onEvent('afterMenuBar', () => `
    <div id='player'>
        <audio controls></audio>
        <div>
            <button onclick="play()">✕</button>
            <span id='player-title'></span>
        </div>
    </div>
`)