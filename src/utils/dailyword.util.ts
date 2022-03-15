import { DailyWord, DailyWordDatabase } from "../models";

const MILISSECONDS_IN_A_MINUTE = 60 * 1000;

export function getToday(): string {
  const todayDate = new Date();
  const correctedDate = new Date(
    todayDate.valueOf() - (todayDate.getTimezoneOffset() * MILISSECONDS_IN_A_MINUTE)
  );

  return correctedDate.toISOString().split('T')[0];
}

export function getDailyWord(): DailyWord {
  return dailyWords[getToday()];
}

export const dailyWords: DailyWordDatabase = {
  '2022-03-14': { edition: '001', date: '2022-03-14', word: 'JOZEI' },
  '2022-03-15': { edition: '002', date: '2022-03-15', word: 'XITER' },
  '2022-03-16': { edition: '003', date: '2022-03-16', word: 'CBFLU' },
  '2022-03-17': { edition: '004', date: '2022-03-17', word: 'ALPHA' },
  '2022-03-18': { edition: '005', date: '2022-03-18', word: 'CARBO' },
  '2022-03-19': { edition: '006', date: '2022-03-19', word: 'BRUTA' },
  '2022-03-20': { edition: '007', date: '2022-03-20', word: 'ANTIS' },
  '2022-03-21': { edition: '008', date: '2022-03-21', word: 'XAVON' },
  '2022-03-22': { edition: '009', date: '2022-03-22', word: 'VERON' },
  '2022-03-23': { edition: '010', date: '2022-03-23', word: 'TRIKA' },
  '2022-03-24': { edition: '011', date: '2022-03-24', word: 'JOZOU' },
  '2022-03-25': { edition: '012', date: '2022-03-25', word: 'TASSA' },
  '2022-03-26': { edition: '013', date: '2022-03-26', word: 'PUCTA' },
  '2022-03-27': { edition: '014', date: '2022-03-27', word: 'PICON' },
  '2022-03-28': { edition: '015', date: '2022-03-28', word: 'JOZAR' },
  '2022-03-29': { edition: '016', date: '2022-03-29', word: 'INDIO' },
  '2022-03-30': { edition: '017', date: '2022-03-30', word: 'JEJUM' },
  '2022-03-31': { edition: '018', date: '2022-03-31', word: 'OLOCO' },
  '2022-04-01': { edition: '019', date: '2022-04-01', word: 'CARBO' },
  '2022-04-02': { edition: '020', date: '2022-04-02', word: 'BANHA' },
  '2022-04-03': { edition: '021', date: '2022-04-03', word: 'MOZAO' },
  '2022-04-04': { edition: '022', date: '2022-04-04', word: 'JOYCE' },
  '2022-04-05': { edition: '023', date: '2022-04-05', word: 'INCEL' },
  '2022-04-06': { edition: '024', date: '2022-04-06', word: 'JAIDS' },
  '2022-04-07': { edition: '025', date: '2022-04-07', word: 'GAMBE' },
  '2022-04-08': { edition: '026', date: '2022-04-08', word: 'FOFAO' },
  '2022-04-09': { edition: '027', date: '2022-04-09', word: 'COVID' },
  '2022-04-10': { edition: '028', date: '2022-04-10', word: 'CARES' },
  '2022-04-11': { edition: '029', date: '2022-04-11', word: 'INLEO' },
  '2022-04-12': { edition: '030', date: '2022-04-12', word: 'CLUBE' },
  '2022-04-13': { edition: '031', date: '2022-04-13', word: 'DROGA' },
  '2022-04-14': { edition: '032', date: '2022-04-14', word: 'SOFRE' },
  '2022-04-15': { edition: '033', date: '2022-04-15', word: 'RENIS' },
  '2022-04-16': { edition: '034', date: '2022-04-16', word: 'DORIA' },
  '2022-04-17': { edition: '035', date: '2022-04-17', word: 'PRIOR' },
  '2022-04-18': { edition: '036', date: '2022-04-18', word: 'CHUCA' },
  '2022-04-19': { edition: '037', date: '2022-04-19', word: 'VADIA' },
  '2022-04-20': { edition: '038', date: '2022-04-20', word: 'SONZA' },
  '2022-04-21': { edition: '039', date: '2022-04-21', word: 'MOLAS' },
  '2022-04-22': { edition: '040', date: '2022-04-22', word: 'ICARO' },
  '2022-04-23': { edition: '041', date: '2022-04-23', word: 'ATLAS' },
  '2022-04-24': { edition: '042', date: '2022-04-24', word: 'VERON' },
  '2022-04-25': { edition: '043', date: '2022-04-25', word: 'BRENO' },
  '2022-04-26': { edition: '044', date: '2022-04-26', word: 'POMBA' },
  '2022-04-27': { edition: '045', date: '2022-04-27', word: 'CECAO' },
  '2022-04-28': { edition: '046', date: '2022-04-28', word: 'CALVO' },
  '2022-04-29': { edition: '047', date: '2022-04-29', word: 'COTIA' },
  '2022-04-30': { edition: '048', date: '2022-04-30', word: 'TERNO' },
  '2022-05-01': { edition: '049', date: '2022-05-01', word: 'GANSO' },
  '2022-05-02': { edition: '050', date: '2022-05-02', word: 'GREVE' },
  '2022-05-03': { edition: '051', date: '2022-05-03', word: 'ROUBO' },
  '2022-05-04': { edition: '052', date: '2022-05-04', word: 'CRACK' },
  '2022-05-05': { edition: '053', date: '2022-05-05', word: 'PORCO' },
  '2022-05-06': { edition: '054', date: '2022-05-06', word: 'TETAS' },
  '2022-05-07': { edition: '055', date: '2022-05-07', word: 'AECIO' },
  '2022-05-08': { edition: '056', date: '2022-05-08', word: 'EBOLA' },
  '2022-05-09': { edition: '057', date: '2022-05-09', word: 'MARIO' },
  '2022-05-10': { edition: '058', date: '2022-05-10', word: 'LUANA' },
  '2022-05-11': { edition: '059', date: '2022-05-11', word: 'MANDY' },
  '2022-05-12': { edition: '060', date: '2022-05-12', word: 'MAIRA' },
  '2022-05-13': { edition: '061', date: '2022-05-13', word: 'COPOS' },
  '2022-05-14': { edition: '062', date: '2022-05-14', word: 'TANKA' },
  '2022-05-15': { edition: '063', date: '2022-05-15', word: 'CAROL' },
  '2022-05-16': { edition: '064', date: '2022-05-16', word: 'GOLPE' },
  '2022-05-17': { edition: '065', date: '2022-05-17', word: 'RASPA' },
  '2022-05-18': { edition: '066', date: '2022-05-18', word: 'MISTO' },
  '2022-05-19': { edition: '067', date: '2022-05-18', word: 'GALAO' },
  '2022-05-20': { edition: '068', date: '2022-05-18', word: 'MASSA' },
  '2022-05-21': { edition: '069', date: '2022-05-18', word: 'GORDO' }
}