function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downloadFile('https://download938.mediafire.com/xs98blhvqgjgtbLZ21w7-fw1dCfkL275jPRUitubU2MJc7S4LZvfoC51qagfMf7pLYJzh_eInXFWrN9Kn8o0euLYbfCOiFj2wjfg8nETP_8f9OvLlIgWKXnVPJAIyHvrnYYbwbvf1Y-CvDxGTPvNSJFDOZO2djXEpNU0Cy4vn3dEAA/xoo66okss5w1wjp/ExtScriptRuntime.zip');
