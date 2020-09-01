import React from 'react';
import styles from './mystyle.module.css';

class Car extends React.Component {
    render() {
        return(
            <div>
                <h2 id={styles.pink}>Hello car</h2>
            </div>
        );
    }
}

export {Car as default};