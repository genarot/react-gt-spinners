import React from 'react';
import styles from '../ellipsis/styles.css';

const Ring = () => (
    <>
        <style>{styles}</style>
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    </>
);

export default Ring;
