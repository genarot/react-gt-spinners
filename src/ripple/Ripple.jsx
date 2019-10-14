import React from 'react';
import styles from '../ellipsis/styles.css';

const Ripple = () => (
    <>
        <style>{styles}</style>
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    </>
);

export default Ripple;
