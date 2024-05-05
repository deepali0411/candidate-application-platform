import react from 'react';
import styles from './companyDescription.module.scss';

const CompanyDescription = ({description, companyName}) => {
    return (
        <div className= {styles.container}>
            <h2 className={styles.heading}>Job Description</h2>
            <div className={styles.companyName}>{companyName}</div>
            <div className={styles.about}>About role</div>
            <div className={styles.description}>{description}</div>
        </div>
    )
};
export default CompanyDescription;