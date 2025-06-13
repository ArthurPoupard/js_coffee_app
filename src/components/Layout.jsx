export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>Not a scam</p>
            </div>
            <button>
                <p>Sign up for free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a>mwa </a>
             using <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">this incredible tutorial</a>
             <br/> <a target >Github Repository</a>
            </p>
        </footer>
    )
    return (
        <>
            {header}

            <main>
                {children}
            </main>

            {footer}
        </>
    )

}