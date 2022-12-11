import { Profile } from "../components/Profile";
export default function Layout({ children }) {
return (
    <div className="content">
        <Profile/>
        {children}
    </div>
)
}