import React, { useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/react';
import './calculadora.css';

const Calculadora: React.FC = () => {
  const [resultado, setResultado] = useState('');
  const [value, setValue] = useState('');
  const [lastValue, setLastValue] = useState('');
  const [operando, setOperando] = useState(false);
  const [operacion, setOperacion] = useState('');
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operaciones = ['+', '-', 'X', '/'];

  function prueba(val: any) {
    if (numeros.includes(val.target.value) && operando === false) {
      setValue(value + val.target.value);
      setResultado(resultado + val.target.value);
      console.log('PRIMER OPERANDO => ' + value);
    } else if (numeros.includes(val.target.value) && operando === true) {
      setLastValue(lastValue + val.target.value);
      setResultado(resultado + val.target.value);
      console.log('SEGUNDO OPERANDO => ' + lastValue);
    } else if (operaciones.includes(val.target.value)) {
      if (val.target.value === '+') {
        setOperacion('+');
      } else if (val.target.value === '-') {
        setOperacion('-');
      } else if (val.target.value === 'X') {
        setOperacion('X');
      } else if (val.target.value === '/') {
        setOperacion('/');
      }
      setResultado(resultado + val.target.value);
      setOperando(true);
    } else if (val.target.value === '=') {
      if (operacion === '+') {
        setResultado(parseInt(value) + parseInt(lastValue));
      } else if (operacion === '-') {
        setResultado(parseInt(value) - parseInt(lastValue));
      } else if (operacion === 'X') {
        setResultado(parseInt(value) * parseInt(lastValue));
      } else if (operacion === '/') {
        setResultado(parseInt(value) / parseInt(lastValue));
      }

      setValue('');
      setLastValue('');
      setOperando(false);
      setOperacion('');
    } else if (val.target.value === 'AC') {
      setResultado('');
      setValue('');
      setLastValue('');
      setOperando(false);
      setOperacion('');
    }
  }

  return (
    console.log('OLA'),
    (
      <IonPage>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol>{resultado}</IonCol>
            </IonRow>
            <IonRow>
              <IonCol onClick={(e) => prueba(e)} value="AC">
                AC
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="+/-">
                +/-
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="%">
                %
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="/">
                /
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol onClick={(e) => prueba(e)} value="7">
                7
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="8">
                8
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="9">
                9
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="X">
                X
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol onClick={(e) => prueba(e)} value="4">
                4
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="5">
                5
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="6">
                6
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="-">
                -
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol onClick={(e) => prueba(e)} value="1">
                1
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="2">
                2
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="3">
                3
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="+">
                +
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol onClick={(e) => prueba(e)} value="0" size="6">
                0
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value=",">
                ,
              </IonCol>
              <IonCol onClick={(e) => prueba(e)} value="=">
                =
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    )
  );
};

export default Calculadora;
