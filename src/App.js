import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard'

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" 
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>The Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: 83%</p>
            <p>Emotional: 34%</p>
            <p>Intellectual: 52%</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
