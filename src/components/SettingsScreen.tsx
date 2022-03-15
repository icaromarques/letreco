import Overlay from "./Overlay";
import '../styles/SettingsScreen.css';
import { OverlayScreenProps } from "../models";
import Button from "./Button";
import { useContext } from "react";
import { GlobalSettingsContext } from "../hooks/useGlobalSettings";


function SettingsScreen({
  handleCloseScreen,
}: OverlayScreenProps) {
  const [{
    isColorblindModeActive,
  }, setGlobalSettings] = useContext(GlobalSettingsContext);

  const handleUrlOpen = (url: string) => {
    window.open(url, '_blank');
  }

  const getActiveString = (isActive: boolean): string =>
    (isActive ? 'ATIVADO' : 'DESATIVADO');

  const getActiveButtonLabel = (isActive: boolean): string =>
    (isActive ? 'DESATIVAR' : 'ATIVAR');

  return <Overlay content={
    <div className="content text-center">
      <h3>Modo daltônico</h3>
      <p>Altera as cores das dicas. O modo está <b>{getActiveString(isColorblindModeActive)}</b>.</p>
      <Button
        label={getActiveButtonLabel(isColorblindModeActive)}
        onClick={() => {setGlobalSettings({ isColorblindModeActive: !isColorblindModeActive })}}
      />

      <hr/>

      <div className="d-flex align-items-center justify-content-center">
        <Button
          onClick={handleCloseScreen}
          label='FECHAR'
        />
      </div>
    </div>
  } />
}

export default SettingsScreen;