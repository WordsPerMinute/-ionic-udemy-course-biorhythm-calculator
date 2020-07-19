import days from 'dayjs';
import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
} from '@ionic/react';
import dayjs from 'dayjs';

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
}

function BiorhythmCard({ targetDate }) {
  return (
    <IonCard className="ion-text-center">
    <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
        <p>Physical: 85%</p>
        <p>Emotional: 34%</p>
        <p>Intellectual: 52%</p>
    </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;