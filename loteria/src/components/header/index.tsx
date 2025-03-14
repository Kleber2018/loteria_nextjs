import Link from "next/link";

import styles from './styles.module.css'

export function Header() {
    return (
        <header  className="flex px-2 py-4 text-white bg-azulRoyal">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>
                    Loteria
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            <Link href='/lotomania'>Lotomania</Link>
                        </li>
                        <li>
                            <Link href='/'>Megasena</Link>
                        </li>
                        
                    </ul>
                </nav>
                
            </div>
        </header>
    )

}