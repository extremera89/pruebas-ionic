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

  function click(val: any) {
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
        setResultado(parseFloat(value) + parseFloat(lastValue));
      } else if (operacion === '-') {
        setResultado(parseFloat(value) - parseFloat(lastValue));
      } else if (operacion === 'X') {
        setResultado(parseFloat(value) * parseFloat(lastValue));
      } else if (operacion === '/') {
        setResultado(parseFloat(value) / parseFloat(lastValue));
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
    } else if (val.target.value === ',' && operando === false) {
      setValue(value + '.');
      setResultado(resultado + '.');
    } else if (val.targe.value === ',' && operando === true) {
      setLastValue(lastValue + '.');
      setResultado(resultado + '.');
    }
  }

  return (
    console.log('OLA'),
    (
      <IonPage>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol id="resultado">{resultado}</IonCol>
            </IonRow>
            <IonRow>
              <IonCol id="ac" size="9" onClick={(e) => click(e)} value="AC">
                AC
              </IonCol>
              <IonCol id="derecha" onClick={(e) => click(e)} value="/">
                /
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol id="centro" onClick={(e) => click(e)} value="7">
                7
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value="8">
                8
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value="9">
                9
              </IonCol>
              <IonCol id="derecha" onClick={(e) => click(e)} value="X">
                X
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol id="centro" onClick={(e) => click(e)} value="4">
                4
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value="5">
                5
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value="6">
                6
              </IonCol>
              <IonCol id="derecha" onClick={(e) => click(e)} value="-">
                -
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol id="centro" onClick={(e) => click(e)} value="1">
                1
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value="2">
                2
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value="3">
                3
              </IonCol>
              <IonCol id="derecha" onClick={(e) => click(e)} value="+">
                +
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol id="centro" onClick={(e) => click(e)} value="0" size="6">
                0
              </IonCol>
              <IonCol id="centro" onClick={(e) => click(e)} value=",">
                ,
              </IonCol>
              <IonCol id="derecha" onClick={(e) => click(e)} value="=">
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
