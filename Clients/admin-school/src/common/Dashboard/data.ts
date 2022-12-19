// import { autorun } from 'mobx';
// import Alert from '../../Assets/dashboard/CLICAR-alertes.svg';
// import Client from '../../Assets/dashboard/CLICAR-clients.svg';
// import Drivers from '../../Assets/dashboard/CLICAR-conducteurs.svg';
// import Contravention from '../../Assets/logo/CLICAR-contraventions.svg';
// import Contrat from '../../Assets/dashboard/CLICAR-contrats.svg';
// import Reservation from '../../Assets/dashboard/CLICAR-reservation.svg';
// import Statistique from '../../Assets/dashboard/CLICAR-statistiques.svg';
// import Suivi from '../../Assets/dashboard/CLICAR-suiviencaissement.svg';
import Users from '../../Assets/dashboard/CLICAR-user-20.svg';
import eleve from '../../Assets/dashboard/eleves.png';
import professor from '../../Assets/dashboard/professor.png';
// import Vehicles from '../../Assets/dashboard/CLICAR-vehicules.svg';
// import Facture from '../../Assets/dashboard/facture.png';
// import history from '../../Assets/dashboard/history.png';
// import TekSat from '../../Assets/logo/CLICAR-géolocalisation.svg';
// import Planning from '../../Assets/logo/CLICAR-planning.svg';
// import Purchase from '../../Assets/logo/mrc-21.svg';
// import SogeCommerce from '../../Assets/logo/mrc-22.svg';
// import paying from '../../Assets/dashboard/paying.png';
// import contentieux from '../../Assets/dashboard/CLICAR-contentieux.svg';
// import immobilisation from '../../Assets/dashboard/CLICAR-centredanalyse.svg';
// import sinistres from '../../Assets/logo/CLICAR-sinistres.svg';
import rootStore from '../../store/AppStore';
import { inject, observer } from 'mobx-react';
import {
  // accsAndComs,
  admins,
  // comAndFacts,
  utilisateurPermission,

} from '../utils/data';
import { userStore } from '../../store';


export interface Idashboard {
  titre: string;
  link: string;
  nbr: number;
  images: any;
  permissions?: string[];
}

const rowData = (): Idashboard[] => [
  {
    titre: 'UTILISATEUR',
    link: '/user/list',
    nbr: rootStore.numbers.usersNumber,
    images: Users,
    permissions: utilisateurPermission,
  },
  {
    titre: 'ELEVES',
    link: '/student/list',
    nbr: rootStore.numbers.studentNumber,
    images: eleve,
    permissions: utilisateurPermission,
  },
  {
    titre: 'PROFESSEURS',
    link: '/professor/list',
    nbr: rootStore.numbers.professorNumber,
    images: professor,
    permissions: utilisateurPermission,
  },
//   {
//     titre: 'CLIENT',
//     link: '/customer/list',
//     // link: `/customer/list/${userStore.user?.urlPlus}`,
//     // link: '/$2a$12$aqQfoSjGv7jHNEFEkEZT3OEet7eZRTnaK5R1Y6C69TGg4n/dWhaQa',
//     nbr: rootStore.numbers.customersNumber,
//     images: Client,
//     permissions: clientPermission,
//   },
//   {
//     titre: 'CONDUCTEUR',
//     link: '/driver/list',
//     // link: '/$2a$12$wIfVvCehJKmrPI4UaeUz7.jS.YrC7UiPKS4eIeANRApkeU6jIRPU6',
//     nbr: rootStore.numbers.driversNumber,
//     images: Drivers,
//     permissions: conducteursPermission,
//   },
//   {
//     titre: 'VÉHICULE',
//     link: '/dashboard/vehicles',
//     // link: '/$2a$12$eoZGkJL2F.79NRuogPL/8uFRQYNyqF2aYqhAHB.Hq370XSUbpONVa',
//     nbr: rootStore.numbers.vehiclesNumber,
//     images: Vehicles,
//     permissions: vehiclesPermission,
//   },
//   {
//     titre: 'BON DE COMMANDE',
//     link: '/PurchaseOrder',
//     nbr: rootStore.numbers.bookingsNumber,
//     images: Purchase,
//     permissions: BDCPermission,
//   },
//   {
//     titre: 'RÉSERVATION',
//     link: '/Booking',
//     nbr: rootStore.numbers.reservationsNumber,
//     images: Reservation,
//     permissions: bookingPermission,
//   },
//   {
//     titre: 'CONTRAT',
//     link: "/contrat/list", 
//     // link: `/contrat/list/${userStore.user?.urlPlus}`,
//     nbr: rootStore.numbers.contractsNumber,
//     images: Contrat,
//     permissions: contratPermission,
//   },
//   {
//     titre: 'CONTRAVENTION',
//     link: '/contravention/dashboard',
//     nbr: 0,
//     images: Contravention,
//     permissions: contravs,
//   },
//   {
//     titre: 'SUIVI ENCAISSEMENT ',
//     link: '/suivi/contrat/contrat',
//     nbr: 0,
//     images: Suivi,
//     permissions: suiviEncaissementPermission,
//   },
  
//   // {
//   //   titre: 'CAPACITAIRE',
//   //   link: '/Capacitaire',
//   //   nbr: rootStore.numbers.userssNumber,
//   //   images: paying,
//   //   permissions: capacitairePermission,
//   // },
//   {
//     titre: 'ALERTE',
//     link: '/Alertes',
//     nbr: rootStore.numbers.alertNumber,
//     images: Alert,
//   },
//   {
//     titre: 'STATISTIQUE',
//     link: '/statistique/revenue',
//     nbr: 0,
//     images: Statistique,
//     permissions: statistiquePermission,
//   },
//   {
//     titre: 'SOGECOMMERCE',
//     link: '/SogeCommerce',
//     nbr: rootStore.numbers.sogecommerces,
//     images: SogeCommerce,
//     permissions: sogecom,
//   },
//   {
//     titre: 'HISTORIQUE GLOBAL',
//     link: '/historique',
//     nbr: 0,
//     images: history,
//     permissions: histGlobPermission,
//   },
//   {
//     titre: 'LOCALISATION',
//     link: '/TekSat',
//     nbr: 0,
//     images: TekSat,
//     permissions: localisationPermission,
//   },
//   {
//     titre: 'FACTURE',
//     link: '/facture',
//     nbr: 0,
//     images: Facture,
//     permissions: facts,
//   },
//   {
//     titre: 'PLANNING VÉHICULES',
//     link: '/dashboard/planning',
//     nbr: 0,
//     images: Planning,
//     permissions: planningVehiculesPermission,
//   },
//   {
//     titre: 'SINISTRES',
//     link: '/sinistre',
//     nbr: rootStore.numbers.sinistresNumber,
//     images: sinistres,
//     permissions: sinistrePermission,
//   },
  // {
  //   titre: 'TEST',
  //   link: '/test',
  //   nbr: 0,
  //   images: test,
  //   permissions: admins,
  // },
  // {
  //   titre: 'CONTENTIEUX',
  //   link: '/contentieux',
  //   nbr: 0,
  //   images: contentieux,
  //   permissions: admins,
  // },
];

export default rowData;

