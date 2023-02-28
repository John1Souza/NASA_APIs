import styles from './hamburguermenu.module.scss'
interface HamburguerMenuProps{
    onClick: () => void;
}
export function HamburguerMenu( props: HamburguerMenuProps ) {
  return (

    <div className={styles.hamburguer_menu} onClick={props.onClick}>
        <div className={styles.hamburguer_menu_line}>
            
        </div>
        <div className={styles.hamburguer_menu_line}>
            
        </div>
        <div className={styles.hamburguer_menu_line}>
            
        </div>
    </div>
  )
}
