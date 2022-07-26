import { defineStore } from "pinia";

import db from '@/hook/firebase.config';

import { collection, query, getDocs } from "firebase/firestore";

export const useStoreDatosPersonales = defineStore(
    "datosPersonales",
    {
        state: () => {
            return {
                campos: []
            }
        },
        actions: {
            /**
             * Función que coge datos de firestore y los almacena en un array de datos
             * Ref: //https://firebase.google.com/docs/firestore/query-data/get-data?hl=es&authuser=0
             */
            async setDatosCurriculum() {


                
                if (this.campos.length)
                    return;
                const curriculumRef = collection(db, 'cv');
                const consulta = query(curriculumRef);
                const resultadoConsulta = await getDocs(consulta);
                resultadoConsulta.forEach(
                    (fila) => {
                        this.campos.push(fila.data());
                        
                    }
                );
            },
            

    //         async getCampos() {
    //   // -> Reseteo <- //
    //   if (this.documents.length !== 0) {
    //     return;
    //   }
    //   // -> Loading de los documentos <- //
    //   this.cargandoDoc = true;
    //   try {
    //     // -> Utilizamos query para indicar cual va a ser la coleccion que vamos a utilizar, y el nombre de su coleccion en Firestore <- //
    //     const q = query(collection(db, "campos"));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, doc.data(auth.currentUser.uid));
    //       // -> Se esta creando el objeto y se esta empujando a documents: [] <- //
    //       this.documents.push({
    //         id: doc.id,
    //         // -> Destructuracion del doc.data() <- //
    //         ...doc.data(),
    //       });
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     this.cargandoDoc = false;
    //   }
    // },
        }
    }
);





