// /pages/review/review-list.jsx
import { Link } from 'react-router-dom';
import { reviewData } from '@/pages/review/review-data';
import styles from '@/pages/review/review-page.module.css';

export const ReviewList = () => {
  return (
    <section className={styles.mainContent} role="main">
      {reviewData.map((item) => (
        <article key={item.id} className={styles.contentBox}>
          <Link to={`/review-page/${item.id}`}>
            <img
              src={item.image}
              alt={`${item.title} 썸네일`}
              className={styles.thumbnail}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.dept}>{item.dept}</p>
          </Link>
        </article>
      ))}
    </section>
  );
};
