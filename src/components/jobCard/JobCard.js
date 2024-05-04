import react from "react";
import styles from "./jobCard.module.scss";

const JobCard = ({ cardData }) => {
  console.log("cardData: ", cardData);

  const estimatedSalary = (min, max, salaryCurrencyCode) =>
    `Estimated Salary ${
      salaryCurrencyCode === "USD" ? "$" : "Rs"
    } ${min} - ${max} ${salaryCurrencyCode === "USD" ? "K" : "LPA"}`;

  return (
    <div className={styles.container}>
    <div className={styles.cardContainer}>
      <div className={styles.firstSection}>
        <img
          className={styles.logo}
          src={cardData?.logoUrl}
          alt="company logo"
          style={{ width: 25, height: 25 }}
        />
        <div className={styles.companyDetail}>
          <h3 className={styles.companyName}>{cardData?.companyName}</h3>
          <h2 className={styles.jobRole}>{cardData?.jobRole}</h2>
          <p className={styles.location}>{cardData?.location}</p>
        </div>
      </div>
        <div className={styles.secondSection}>
          {estimatedSalary(cardData?.minJdSalary, cardData?.maxJdSalary,
          cardData?.salaryCurrencyCode)}
        </div>
        <div className={styles.thirdSection}>
          <p className={styles.heading}>About Company:</p>
          <div className={styles.description}>
          <p className={styles.about}>About us</p>
            {cardData?.jobDetailsFromCompany.substring(0, 350)}...
            </div>
            <div className={styles.button}><button className={styles.showMore}>Show More</button></div>
        </div>
    </div>
    </div>
  );
};
export default JobCard;
