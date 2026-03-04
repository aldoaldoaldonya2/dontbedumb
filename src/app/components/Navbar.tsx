export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-6">
            <ul className="list-none flex gap-6 font-limelight text-xl">
                <li><a href="#">About</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Story</a></li>
            </ul>
            <h1 className="text-5xl font-notable absolute left-1/2 -translate-x-1/2 -translate-y-2">
                Dont Be Dumb
            </h1>
            <div className="flex items-center gap-6">
                <a href="https://music.apple.com/us/album/dont-be-dumb/1862934946" target="_blank"><i className="bi bi-apple-music text-4xl"></i></a>
                <a href="https://open.spotify.com/album/4itKk52E9ZCdWUQcFAkud9?si=Bnxya4uLTSWKiaQyztA2sg" target="_blank"><i className="bi bi-spotify text-4xl"></i></a>
                <a href="https://github.com/aldoaldoaldonya2" target="_blank"><i className="bi bi-github text-4xl"></i></a>
            </div>
        </nav>
    );
}