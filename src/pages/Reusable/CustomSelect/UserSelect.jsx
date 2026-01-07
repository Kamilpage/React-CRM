import {useState, useRef, useEffect} from 'react'
import styles from './customSelect.module.css'
import arrow from '../../../assets/icons/others/arrowDown.svg'

const UserSelect = ({value, onChange, options}) => {


    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={ref} className={styles.select}>
            {/* CONTROL */}
            <button
                type="button"
                className={styles.control}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <img src={value.avatar} alt='no img' className={styles.avatar}/>
                <span>{value.name}</span>
                <img src={arrow} alt="arrow" className={isOpen ? styles.arrowUp : ''}/>
            </button>

            {/* MENU */}
            {isOpen && (
                <ul className={styles.menu}>
                    {options.map(user => (
                        <li
                            key={user.id}
                            className={styles.option}
                            onClick={() => {
                                onChange(user)
                                setIsOpen(false)
                            }}
                        >
                            <img src={user.avatar} alt={user.name} className={styles.avatar}/>
                            <span>{user.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UserSelect