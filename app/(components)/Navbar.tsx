import { faHome, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-navbar p-4">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <FontAwesomeIcon
                        icon={faHome}
                        className="icon"
                    />
                </Link>
                <Link href="/TicketPage/new">
                    <FontAwesomeIcon
                        icon={faTicket}
                        className="icon"
                    />
                </Link>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
        </nav>
    )
}