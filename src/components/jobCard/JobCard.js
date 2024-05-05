import react, {useState} from "react";
import styles from "./jobCard.module.scss";
import Modal from "../modal/Modal";
import CompanyDescription from "../companyDescription/CompanyDescription";

const JobCard = ({ cardData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
        {cardData?.minJdSalary && cardData?.maxJdSalary && (
          <div className={styles.secondSection}>
            {estimatedSalary(
              cardData?.minJdSalary,
              cardData?.maxJdSalary,
              cardData?.salaryCurrencyCode
            )}
          </div>
        )}
        <div className={styles.thirdSection}>
          <p className={styles.heading}>About Company:</p>
          <div className={styles.description}>
            <p className={styles.about}>About us</p>
            {cardData?.jobDetailsFromCompany.substring(0, 350)}...
          </div>
          <div className={styles.button}>
            <button className={styles.showMore} onClick={()=> setIsOpenModal(true)}>Show More</button>
          </div>
          {isOpenModal && <Modal hideModal={()=> setIsOpenModal(false)}>
            <CompanyDescription description={cardData?.jobDetailsFromCompany} companyName={cardData?.companyName} />
            </Modal>}
        </div>
        {cardData?.minExp && (
          <div className={styles.lastSection}>
            <div>Minimum Experience</div>
            {cardData?.minExp} years
          </div>
        )}
        <a href={cardData?.jdLink} target="blank">
          Apply
        </a>
      </div>
    </div>
  );
};
export default JobCard;
