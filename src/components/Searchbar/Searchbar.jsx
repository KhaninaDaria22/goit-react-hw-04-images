import { useState } from "react";

import styles from './Searchbar.module.css'


const Searchbar = ({onSubmit}) => {
    const [search, setSearch] = useState('');

 const handleChange = ({ target }) => {
        const {value} = target;
        setSearch(value)
    };

const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({search});
        setSearch('');
    };
    
        return (
            <header className={styles.searchbar}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <button type="submit" className={styles.button}>
                        <span className={styles.label}>Search</span>
                    </button>
                    <input
                        name="search"
                        className={styles.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={search}
                    />
                </form>
            </header>
        )
    };

export default Searchbar;


















