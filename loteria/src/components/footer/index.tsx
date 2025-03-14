import Link from "next/link";

import styles from './styles.module.css'

export function Footer() {
    return (
        <footer  className="flex px-2 py-4 text-azulRoyal bg-amber-200 border-amber-100 border-solid border-1 h-20">
            <div className="flex items-center justify-center w-full mx-auto max-w-7xl ">
                <div>
                <p className="text-center">12/03/25 - Mais informações em <Link href='https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx'>Loterias Caixa</Link> | Desenvolvido por KLRS</p>
                </div>
                               
            </div>
        </footer>
    )

}