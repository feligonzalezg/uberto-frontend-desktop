import { ModeToggle } from "../themes/mode-toggle";
import { SidebarTrigger } from "../ui/sidebar";


const Header = () => {
	return (
		<header className="fixed top-0 w-full bg-violet-500 z-50 py-2 shadow-md flex">
			<SidebarTrigger />
			<h1> Uberto </h1>
		</header>
	)
}

export default Header;