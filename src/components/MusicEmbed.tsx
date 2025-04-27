function MusicEmbed() {
    return (
        <div>
            <a href="https://www.last.fm/user/cryon-ixx">
                <img
                    src="https://lastfm-recently-played.vercel.app/api?user=cryon-ixx"
                    height="auto"
                    width="350px"
                />
            </a>
            <p>
                Last.Fm embed by{" "}
                <a
                    href="https://blog.spacehey.com/entry?id=221954"
                    className="text-darker-powderblue"
                >
                    this mister guy (Thank you! ^^)
                </a>{" "}
            </p>
        </div>
    );
}

export default MusicEmbed;
