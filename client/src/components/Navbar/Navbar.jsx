import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { UserContext } from "../../../context/userContext";

export default function Navbar() {
    const { user, logout } = useContext(UserContext);

    return (
        <nav className="navbar">
            <Link to='/' className="nav-item">Home</Link>
            <input type="text" className="searchbar" placeholder="Search for anything..." />
            <Link to='/jobs' className="nav-item">Jobs</Link>
            <Link to='/businesses' className="nav-item">Businesses</Link>
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} />
                            <AvatarFallback>{user.initials || "CN"}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Link to='/profile'>Profile</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to='/settings'>Settings</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to='/saved'>Saved</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link to='/auth' className="login-register-button">Login/Register</Link>
            )}
        </nav>
    );
}