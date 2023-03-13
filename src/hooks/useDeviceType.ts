import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export type DeviceType = "mobile" | "tablet" | "desktop";

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  const handleResize = () => {
    if (isMobile) {
      setDeviceType("mobile");
    } else if (isTablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  useEffect(() => {
    handleResize(); // определяем начальный тип устройства
    window.addEventListener("resize", handleResize); // добавляем обработчик события onresize
    return () => {
      window.removeEventListener("resize", handleResize); // удаляем обработчик при размонтировании компонента
    };
  }, []); // пустой массив зависимостей, чтобы useEffect вызывался только при монтировании компонента

  const isMobile = useMediaQuery({ maxDeviceWidth: 600 });
  const isTablet = useMediaQuery({ minDeviceWidth: 601, maxDeviceWidth: 960 });

  if (isMobile) {
    return "mobile";
  }

  if (isTablet) {
    return "tablet";
  }

  return deviceType;
}
