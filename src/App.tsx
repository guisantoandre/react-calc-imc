import styles from "./AppStyles.module.css";
import calculatorIcon from "./assets/calculator.svg";
import { arrayRating, typeRating, calculateImc } from "./helpers/imc";
import { Card } from "./components/Card";
import { useState } from "react";

import { MdArrowBack } from "react-icons/md";

const App = () => {
   const [heightField, setHeightField] = useState<number>(0);
   const [weightField, setWeightField] = useState<number>(0);
   const [showResult, setResult] = useState<typeRating | null>(null);

   const buttonCalcImc = () => {
      if (heightField && weightField) {
         setResult(calculateImc(heightField, weightField));
      } else {
         alert("É necessário informar os dois campos: Altura e Peso.");
      }
   };

   const clearResult = () => {
      setResult(null);
      setHeightField(0);
      setWeightField(0);
   };

   return (
      <>
         <div className={styles.container}>
            <header>
               <h1 className={styles.logo}>
                  <img src={calculatorIcon} alt="Calculator Icon Logo" />
                  IMCalculator
               </h1>
               <span>
                  por{" "}
                  <a href="https://guisantoandre.github.io/" target="_blank">
                     guilherme
                  </a>
               </span>
            </header>

            <div className={styles.sectionWrapper}>
               <div className={styles.leftSide}>
                  <h2>Calcule seu IMC</h2>
                  <p>
                     IMC é a sigla para Índice de Massa Corpórea para calcular o
                     peso ideal de cada pessoa. O índice é calculado da seguinte
                     maneira: divide-se o peso do paciente pela sua altura
                     elevada ao quadrado.
                  </p>
                  <p>
                     Quer descobrir seu IMC? Insira sua altura e peso nos campos
                     abaixo e clique no botão calcular para mostrar o resultado
                     ao lado.
                  </p>

                  <div className={styles.inputContainer}>
                     <div className={styles.inputWrapper}>
                        <label htmlFor="height">Altura</label>
                        <input
                           type="number"
                           id="height"
                           placeholder="1,80"
                           value={heightField ? heightField : " "}
                           onChange={(e) =>
                              setHeightField(parseFloat(e.target.value))
                           }
                           disabled={showResult ? true : false}
                        />
                     </div>
                     <div className={styles.inputWrapper}>
                        <label htmlFor="height">Peso</label>
                        <input
                           type="number"
                           id="weight"
                           placeholder="80"
                           value={weightField ? weightField : " "}
                           onChange={(e) =>
                              setWeightField(parseFloat(e.target.value))
                           }
                           disabled={showResult ? true : false}
                        />
                     </div>
                     <button
                        onClick={buttonCalcImc}
                        disabled={showResult ? true : false}
                     >
                        Calcular +
                     </button>
                  </div>
               </div>

               <div className={styles.rightSide}>
                  {!showResult && (
                     <div className={styles.cardWrapper}>
                        {arrayRating.map((data, key) => (
                           <Card key={key} item={data} />
                        ))}
                     </div>
                  )}
                  {showResult && (
                     <div className={styles.cardResult}>
                        <span>
                           <MdArrowBack
                              className={styles.btnBackHome}
                              onClick={clearResult}
                           />
                        </span>
                        <Card item={showResult} />
                     </div>
                  )}
               </div>
            </div>
         </div>

         <footer>
            <p>
               Informações sobre IMC neste link:{" "}
               <a
                  href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal"
                  target="_blank"
               >
                  IMC
               </a>
            </p>
         </footer>
      </>
   );
};

export default App;
