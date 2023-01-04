import styles from "./Cards.module.css";
import { typeRating } from "../../helpers/imc";
import upIcon from "../../assets/thumbup.svg";
import downIcon from "../../assets/thumbdown.svg";

type Props = {
   item: typeRating;
};

export const Card = ({ item }: Props) => {
   return (
      <div className={styles.card} style={{ backgroundColor: item.color }}>
         <span className={styles.bgSpan}>
            <img
               src={item.icon === "up" ? upIcon : downIcon}
               alt={item.icon === "up" ? "Thumb Up Icon" : "Thumb Down Icon"}
            />
         </span>

         <h3>{item.title}</h3>

         {item.actualImc && (
            <code>
               Seu IMC é <strong>{item.actualImc}</strong> kg/m²
            </code>
         )}

         <code>
            IMC entre <strong>{item.imc[0]}</strong> e{" "}
            <strong>{item.imc[1]}</strong>
         </code>
      </div>
   );
};
