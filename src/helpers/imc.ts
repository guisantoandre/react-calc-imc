export type typeRating = {
   title: string;
   color: string;
   icon: "up" | "down";
   imc: number[];
   actualImc?: number;
};

export const arrayRating: typeRating[] = [
   { title: "Abaixo do peso", color: "#EDEDED", icon: "down", imc: [0, 18.49] },
   { title: "Normal", color: "#79E9AD", icon: "up", imc: [18.5, 24.99] },
   { title: "Sobrepeso", color: "#FCF081", icon: "down", imc: [25, 30] },
   { title: "Obeso", color: "#F47171", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
   const imc = weight / (height * height);

   for (let item in arrayRating) {
      if (imc >= arrayRating[item].imc[0] && imc < arrayRating[item].imc[1]) {
         let copyTypeRating: typeRating = { ...arrayRating[item] };
         copyTypeRating.actualImc = parseFloat(imc.toFixed(2));
         return copyTypeRating;
      }
   }

   return null;
};
