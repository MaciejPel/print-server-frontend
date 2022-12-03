import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Header: React.FC = () => {
	const [mounted, setMounted] = useState(false);

	return (
		<header className="navbar sticky top-0 backdrop-blur bg-opacity-50 bg-base-300 flex justify-center h-16 shadow-sm z-10">
			<div className="flex justify-between container">
				<div className="md:px-2">
					{/* <Link href="/"> */}
					<a className="md:text-lg text-base font-bold flex items-center rounded px-2 md:gap-1 btn btn-ghost normal-case">
						{/* <CubeIcon className="md:w-10 w-7" /> */}
						<div className="sm:block hidden">
							Storage
							<span className="text-accent">Box</span>
						</div>
					</a>
					{/* </Link> */}
				</div>
				<nav className="flex justify-end">
					<div className="flex">
						<div className="dropdown">
							<label
								tabIndex={0}
								className="btn btn-sm gap-1 normal-case btn-ghost"
							>
								{/* <ColorSwatchIcon className="w-5" /> */}
								<span className="hidden md:inline">Themes</span>
							</label>
							<ul
								tabIndex={0}
								className="menu dropdown-content px-1 shadow bg-base-200 rounded mt-4 pt-1 whitespace-nowrap md:ml-auto md:w-36"
							></ul>
						</div>
						{status === 'authenticated' && (
							<a className="btn btn-sm btn-ghost text-base-content normal-case gap-1">
								{/* <LogoutIcon className="w-5 -scale-100" /> */}
								<span className="hidden md:inline">Logout</span>
							</a>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
