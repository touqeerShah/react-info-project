import HostVanDetails from "../pages/Host//HostVanDetails"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function HostVanLayout() {
    return (
        <>
            <HostVanDetails />
            <nav className="host-nav">
                <NavLink className={({ isActive }) => isActive ? "active-link" : null} to="." end>Details</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : null} to="pricing">Pricing</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : null} to="photo">Photo</NavLink>
            </nav>
            <Outlet />
        </>
    )
};