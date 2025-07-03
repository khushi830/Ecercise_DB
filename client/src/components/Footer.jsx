import github from '../assets/icons/github.svg'
import twitter from '../assets/icons//twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/mail.svg'

const Footer = () => {
    return (
        <footer className="py-[5rem] bg-bg-secondary flex flex-col gap-[1rem] items-center justify-center">
            <div>
                <p className="text-[1.6rem]">
                    &copy;Khushi Dwivedi 2024. All rights reserved.
                </p>
                <a href="mailto:khushid830@gmail.com">
                    <img
                        src={mail}
                        alt="mail logo"
                        className="w-[3rem] m-auto"
                    />
                </a>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[1.4rem]">Connect with me:</p>
                <ul className="flex flex-row items-center gap-[1rem]">
                    <li>
                        <a
                            href="https://github.com/khushi830"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src={github}
                                alt="socail media logo"
                                className="w-[4rem]"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/khushi-dwivedi-97b28a285/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src={linkedin}
                                alt="socail media logo"
                                className="w-[4rem]"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
