import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (optional)"
          />
          <textarea rows={6} placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
