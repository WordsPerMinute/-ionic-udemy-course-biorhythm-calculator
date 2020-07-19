import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard'

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate &&
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
        }
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" 
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" 
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
