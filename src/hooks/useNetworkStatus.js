import { useState, useEffect } from 'react';

/**
 * Hook para detectar conexão lenta e adaptar a experiência
 * Retorna um objeto com informações sobre a rede
 */
export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    effectiveType: '4g',
    downlink: 10,
    rtt: 50,
    saveData: false,
    isSlowConnection: false,
  });

  useEffect(() => {
    // Verificar se a API está disponível
    if (!('connection' in navigator)) {
      return;
    }

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    const updateNetworkStatus = () => {
      const effectiveType = connection.effectiveType || '4g';
      const downlink = connection.downlink || 10;
      const rtt = connection.rtt || 50;
      const saveData = connection.saveData || false;

      // Considerar conexão lenta se:
      // - Tipo de conexão é 2g ou slow-2g
      // - RTT (Round Trip Time) é maior que 500ms
      // - Save Data está ativado
      const isSlowConnection =
        effectiveType === '2g' ||
        effectiveType === 'slow-2g' ||
        rtt > 500 ||
        saveData;

      setNetworkStatus({
        effectiveType,
        downlink,
        rtt,
        saveData,
        isSlowConnection,
      });

      // Adicionar classe no HTML para CSS adaptar
      if (isSlowConnection) {
        document.documentElement.classList.add('slow-connection');
      } else {
        document.documentElement.classList.remove('slow-connection');
      }
    };

    // Update inicial
    updateNetworkStatus();

    // Listener para mudanças na conexão
    connection.addEventListener('change', updateNetworkStatus);

    return () => {
      connection.removeEventListener('change', updateNetworkStatus);
    };
  }, []);

  return networkStatus;
};

/**
 * Hook simplificado que retorna apenas se a conexão é lenta
 */
export const useIsSlowConnection = () => {
  const { isSlowConnection } = useNetworkStatus();
  return isSlowConnection;
};
