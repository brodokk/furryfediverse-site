import { useState } from 'react'

const maintainers = [
    {
        user: 'hack13',
        domain: 'cyberfurz.social',
    },

    {
        user: 'brodokk',
        domain: 'furry.engineer',
    },

    {
        user: 'oric',
        domain: 'macrofurs.social',
    },
]

export default function Layout({ children }: any) {
    const [theme, setTheme] = useState('dark')

    return (
        <div
            className="flex flex-col bg-base-300 min-h-screen gap-8"
            data-theme={theme}
        >
            <div className="grow">
                <div className="p-2 md:p-5 lg:px-6 2xl:px-80">
                    <div className="flex justify-between items-center">
                        <p className="text-4xl place-self-center">
                            The Furry Fediverse
                        </p>
                        <div className="flex flex-nowrap justify-evenly items-center gap-2">
                            <i className="fa-solid fa-moon"></i>
                            <input
                                type="checkbox"
                                className="toggle"
                                onChange={() => toggleTheme()}
                            />
                            <i className="fa-solid fa-sun"></i>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <footer className="footer py-6 px-4 sm:px-12 bg-neutral text-neutral-content flex justify-between items-center">
                <div>
                    <div className="flex flex-col gap-2">
                        <div>Maintened by:</div>
                        <div></div>
                        {maintainers.map(
                            (data: { user: string; domain: string }) => (
                                <div key={data.user + data.domain}>
                                    <a
                                        rel="me noreferrer"
                                        href={`https://${data.domain}/@${data.user}`}
                                        className="link flex items-center"
                                        target="_blank"
                                    >
                                        <div>
                                            <i className="fa-brands fa-mastodon text-2xl"></i>
                                        </div>
                                        <div>
                                            {data.user}@{data.domain}
                                        </div>
                                    </a>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div>
                    Find us here:
                    <div className="flex items-center flex-row gap-4">
                        <a
                            href="https://github.com/CyberFurz/furryfediverse-site"
                            className="link text-6xl no-underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            rel="me noreferrer"
                            href="https://cyberfurz.social/@FurryFediverse"
                            className="link text-6xl no-underline"
                            target="_blank"
                        >
                            <i className="fa-brands fa-mastodon"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )

    function toggleTheme() {
        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
}
